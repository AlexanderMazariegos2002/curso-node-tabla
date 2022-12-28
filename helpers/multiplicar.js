const fs = require('fs');
const colors = require('colors')

const crearArchivo = async(base = true, listar = false, hasta = 10) => {

    try{
        //if (listar) {
        //    console.log('=================')
        //    console.log('  Tabla del:', base)
        //    console.log('=================')
        //}
    
        let salida = '';
        let consola = '';
    
        for(let i = 1; i <= hasta; i++) {
            salida +=`${base} x ${i} = ${base * i}\n`;
            consola +=`${base} ${'x'.green} ${i} ${'='.blue} ${base * i}\n`;
        }

        if (listar) {
            console.log('================='.inverse.bgRed)
            console.log('  Tabla del:'.green, colors.blue(base))
            console.log('================='.inverse.bgRed)
        }
    
        console.log(consola);
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
        return(`tabla-${base}.txt`);
    } catch (err) {
        throw err;
    }

}

module.exports = {
     crearArchivo
}