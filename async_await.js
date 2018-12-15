
let getNombre = () =>{
    return new Promise((resolv, reject)=>{
        setTimeout(()=>{
            resolv('Fernanda!');
        }, 3000)
    })
}

let saludo = async() => {
    let nombre = await getNombre()
    return `Hola ${nombre}!`;
}


// getNombre().then(nombre => {
//     console.log(nombre)
// }).catch(e => {
//     console.log('Error en async ', e)
// })
