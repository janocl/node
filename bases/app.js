const argv = require('yargs').command('listar', 'Imprime en consola la tabla de multiplicar', {
                                base : {
                                    demand  : true,
                                    alias   : 'b'
                                },
                                limite:{
                                    alias   : 'l',
                                    default : 10
                                }
                            }).help().argv;

const {crearArchivo} = require('./multiplicar/multiplicar')

// let base = 3;
//
// crearArchivo(base)
//     .then( archivo => console.log(`Archivo creado: ${archivo}!`))
//     .catch(e => console.log(e));


console.log('limite', argv.limite)
