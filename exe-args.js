//node exe-args.js hello --name Meni

//{ _: [ 'hello' ],
//    name: 'Meni',
//    '$0': 'C:\\Projects\\node\\password\\exe-args.js' }


var argv = require('yargs')
    .command('hello', 'Greets the user', function(yargs){
        yargs.options({
            name: {
                demand: true,
                alias: 'n',
                description: 'Your first name'
            },

            lastname: {
                demand: true,
                alias: 'l',
                description: 'Your last name'
            }
        }).help('help');
    })
    .help('help')
    .argv;

var command = argv._[0];
console.log(argv);

if(command === 'hello' && typeof argv.name !== 'undefined' &&
    typeof argv.lastname !== 'undefined' ){
    console.log('hello ' + argv.name + ' ' + argv.lastname + '!')
} else if(command === 'hello' && typeof argv.name !== 'undefined'){
    console.log('hello ' + argv.name + '!');
}else if(command === 'hello'){
    console.log('hello !');
}