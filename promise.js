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


let getEmpleado = (id) => {

    return new Promise((resolve, reject)=> {

        let empleadoDB = empleados.find( empleado => empleado.id === id);
        if(!empleadoDB){
            reject(`No existe un empleado con el id ${id}`);
        }else{
            resolve(empleadoDB);
        }

    })
}



let getSalario = (empleado) => {

    return new Promise( (resolve, reject) =>{

        let empleadoEncontrado = empleados.find( e => e.nombre === empleado.nombre);

        if(!empleadoEncontrado){
            reject(`No existe un empleado con el nombre ${empleado.nombre}!`);
        }else{

            let salarioEmpleado = salarios.find( s => s.idfk == empleadoEncontrado.id);
            if(!salarioEmpleado){
                reject(`No se encontró un salario para ${empleadoEncontrado.nombre}!`);
            }else{
                resolve({
                    id      :   empleadoEncontrado.id,
                    nombre  :   empleadoEncontrado.nombre,
                    salario :   salarioEmpleado.salario
                });
            }
        }
    });
}

getEmpleado(1).then( empleado => {
    //console.log('Empleado de DB', empleado);
    getSalario(empleado).then( empleado => {

            console.log(`El salario de ${empleado.nombre}: es de: $${empleado.salario}.-`);

        }, (err) => console.log(err))

}, (err) => console.log(err) );
