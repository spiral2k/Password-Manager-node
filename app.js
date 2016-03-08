// cmd commands:
// create
//   --name
//   --username
//   -- password

// get
//   --name
console.log('\n--------------------------------\n');
console.log('Starting Password manager App.\n');
console.log('--------------------------------\n');

var crypto = require('crypto-js');
var argv = require('yargs')
    .command('create', 'Create account', function(yargs){
        yargs.options({
            name: {
                demand: true,
                alias: 'n',
                description: 'Your name',
                type: 'string'
            },
            username: {
                demand: true,
                alias: 'u',
                description: 'Your username name',
                type: 'string'
            },
            password: {
                demand: true,
                alias: 'p',
                description: 'Your password name',
                type: 'string'
            },
            masterPassword: {
                demand: true,
                alias: 'm',
                description: 'Your MASTER password name',
                type: 'string'
            }
        }).help('help');
    }).command('get', 'Get account information', function(yargs){
        yargs.options({
            name: {
                demand: true,
                alias: 'n',
                description: 'Your name',
                type: 'string'
            },
            masterPassword: {
                demand: true,
                alias: 'm',
                description: 'Your MASTER password name',
                type: 'string'
            }
        }).help('help');
    })
    .help('help')
    .argv;

var command = argv._[0];


var storage = require('node-persist');
storage.initSync();




function getAccount(accountName, masterPassword){

    var accounts = getAccounts(masterPassword);

    console.log('Searching for account: ',accountName);

    for(i = 0; i < accounts.length; i++){
        if(accounts[i].name === accountName){
            console.log('\nAccount found:');
            return accounts[i];
        }
    }

    console.log('No account found.');

    return false;
}


function saveAccounts(accounts, masterPassword){

    var encryptedAccounts = crypto.AES.encrypt(JSON.stringify(accounts), masterPassword);

    storage.setItemSync('accounts', encryptedAccounts.toString());

    return accounts

}


function getAccounts(masterPassword){

    var encryptedAccount = storage.getItemSync('accounts');
    var accounts = [];

    if(typeof encryptedAccount !== 'undefined') {
        var bytes = crypto.AES.decrypt(encryptedAccount, masterPassword);
        accounts = JSON.parse(bytes.toString(crypto.enc.Utf8));
    }

    // return accounts array
    return accounts;
}




function createAccount(account, masterPassword){

    // get decrypted accounts by master password | get Object (JSON.parse)
    var accounts = getAccounts(masterPassword);

    // push new user account to array
    accounts.push(account);

    saveAccounts(accounts, masterPassword);

    console.log('\nNew accounts created: ', account, '\n Your master password: ', masterPassword);

    return account;

}



if(command === 'create'){
    createAccount({
        name: argv.name,
        username: argv.username,
        password: argv.password
    }, argv.masterPassword);
} else if(command === 'get'){
    var accountFound = getAccount(argv.name, argv.masterPassword);
    console.log(accountFound);
}


//createAccount({
//    name: 'meni',
//    username: 'spiral2k',
//    password:'spiral2k'
//});
//
//
//getAccount('meni')


