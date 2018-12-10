let empleados = [{
    id      :   1,
    nombre  :   'Andres'
},{
    id      :   2,
    nombre  :   'Ignacio'
},{
    id      :   3,
    nombre  :   'Fernanda'
}];

let salarios =  [{
    idfk    :   1,
    salario :   450000
},{
    idfk    :   2,
    salario :   750000
}];

// Funcion que obtiene empleado por id
let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find( empleado => empleado.id === id);
    if(!empleadoDB){
        callback(`No existe un empleado con el id ${id}`);
    }else{
        callback(null, empleadoDB);
    }
}

// getEmpleado(3, (err, empleado)=>{
//     if(err){
//         return console.log(err)
//     }
//     console.log(empleado)
// });

// Funcion que obtiene el salario por empleado
let getSalario = (empleado, callback) => {
    let empleadoEncontrado = empleados.find( e => e.nombre === empleado);
    if(!empleadoEncontrado){
        callback(`No existe un empleado con el nombre ${empleado}!`);
    }else{

        let salarioEmpleado = salarios.find( s => s.idfk == empleadoEncontrado.id);
        if(!salarioEmpleado){
            callback(`No se encontró un salario para ${empleadoEncontrado.nombre}!`);
        }else{

            callback(null, {
                nombre  :   empleadoEncontrado.nombre,
                salario :   salarioEmpleado.salario
            });
        }
    }
}

getSalario('Andres', (err, empleadoSalario)=>{
    if(err){
        return console.log(err)
    }
    console.log(empleadoSalario)

});
