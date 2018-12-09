let getUsuarioById = (iduser, callback) => {

    let usuario = {
        id      :   24,
        nombre  :   'Juan'
    }

    if(iduser === usuario.id){
        // Un callback devuelve un parametro y su primer parametro va a ser un error
        callback(null, usuario);
    }else{
        callback(`El usuario con el id ${iduser} no existe!`);
    }
}

getUsuarioById(15, (err, usuario)=>{
    if(err){
        return console.log(err);
    }

    console.log("Usario en base de datos: ", usuario);
});
