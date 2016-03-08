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
            }
        }).help('help');
    }).command('get', 'Get account information', function(yargs){
        yargs.options({
            name: {
                demand: true,
                alias: 'n',
                description: 'Your name',
                type: 'string'
            }
        }).help('help');
    })
    .help('help')
    .argv;

var command = argv._[0];


var storage = require('node-persist');
storage.initSync();

function createAccount(account){
    var accounts = storage.getItemSync('accounts');

    if(typeof accounts === 'undefined') {
        accounts = [];
    }

    accounts.push(account);
    storage.setItemSync('accounts', accounts);

    console.log('Account '+ account.name +' created!\n ' , account)

    return account;
}


function getAccount(accountName){
    var accounts = storage.getItemSync('accounts');

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



if(command === 'create'){
    createAccount({
        name: argv.name,
        username: argv.username,
        password: argv.password
    });
} else if(command === 'get'){
    var accountFound = getAccount(argv.name);

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


