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

        let salarioEmpleado = salarios.find( s => s.idfk == empleado.id);
        if(!salarioEmpleado){
            reject(`No se encontró un salario para ${empleado.nombre}!`);
        }else{
            resolve({
                id      :   empleado.id,
                nombre  :   empleado.nombre,
                salario :   salarioEmpleado.salario
            });
        }

    });
}

getEmpleado(3).then( empleado => {
    getSalario(empleado).then( empleado => {
            console.log(`El salario de ${empleado.nombre}: es de: $${empleado.salario}.-`);
        }, (err) => console.log(err))
}, (err) => console.log(err) );
