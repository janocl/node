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


let getEmpleado = async (id) => {
    let empleadoDB = empleados.find( empleado => empleado.id === id);
    if(!empleadoDB){
        throw new Error(`No existe un empleado con el id ${id}`);
    }else{
        return empleadoDB;
    }
}


let getSalario = async(empleado) => {

    let salarioEmpleado = salarios.find( s => s.idfk == empleado.id);
    if(!salarioEmpleado){
        throw new Error(`No se encontró un salario para ${empleado.nombre}!`);
    }else{
        return {
            id      :   empleado.id,
            nombre  :   empleado.nombre,
            salario :   salarioEmpleado.salario
        };
    }
}


let getData = async (id) => {
    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);

    return console.log(`El empleado ${resp.nombre} tiene un salario de $${resp.salario}`);
}


getData(2).then( mensaje => console.log(mensaje))
            .catch( err => console.log(err));
