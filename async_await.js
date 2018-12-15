
let getNombre = () =>{
    return new Promise((resolv, reject)=>{
        setTimeout(()=>{
            resolv('Mauricio!');
        }, 3000)
    })
}
// getNombre().then(nombre => {
//     console.log(nombre)
// }).catch(e => {
//     console.log('Error en async ', e)
// })

let saludo = async() => {
    let nombre = await getNombre()
    return `Hola ${nombre}.-`;
}


saludo().then(resp => {
    console.log(resp)
})
