//node exe-args.js hello --name Meni

//{ _: [ 'hello' ],
//    name: 'Meni',
//    '$0': 'C:\\Projects\\node\\password\\exe-args.js' }


var argv = require('yargs').argv;
var command = argv._[0];
console.log(argv);

if(command === 'hello' && typeof argv.name !== 'undefined' &&
    typeof argv.lastName !== 'undefined' ){
    console.log('hello ' + argv.name + ' ' + argv.lastName + '!')
} else if(command === 'hello' && typeof argv.name !== 'undefined'){
    console.log('hello ' + argv.name + '!');
}else if(command === 'hello'){
    console.log('hello !');
}