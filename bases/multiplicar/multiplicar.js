const fs = require('fs')

let crearArchivo = (base) => {

    return new Promise((resolv, reject)=>{

        let data = '';
        for(let i=1; i<=10; i++){
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tabla-${base}.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolv(`tabla-${base}.txt`)

        });
        
    })

}

module.exports{
    crearArchivo
}
