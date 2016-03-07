console.log('Starting Password manager App.');

var storage = require('node-persist');

storage.initSync();

function createAccount(account){
    var accounts = storage.getItemSync('accounts');

    if(typeof accounts === 'undefined') {
        accounts = [];
    }

    accounts.push(account);
    storage.setItemSync('accounts', accounts);

    return account;
}


function getAccount(accountName){
    var accounts = storage.getItemSync('accounts');

    for(i = 0; i < accounts.length; i++){
        if(accounts[i].name === accountName){
            console.log('Account found: ',accounts[i]);
            return accounts[i];
        }
    }

    console.log('No account found.');

    return false;
}


//createAccount({
//    name: 'meni',
//    username: 'spiral2k',
//    password:'spiral2k'
//});
//
//
//getAccount('meni')


