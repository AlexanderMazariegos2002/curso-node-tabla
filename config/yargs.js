const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'.green
                })

                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Este es el numero hasta donde quieres la tabla de multiplicar'.blue
                })

                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: 10,
                    describe: 'Muestra la tabla en consola'.red
                })
                .check((argv, options) => {
                    if(isNaN(argv.base)) {
                        throw 'La base tiene que ser un numero';
                    }

                    return true;

                } )
                .argv;

    module.exports = argv;