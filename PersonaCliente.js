

//Crea una clase Persona con las siguientes variables:La edad El nombre El teléfono
class Persona{
    constructor(edad, nombre, telefono){
        this.edad = edad
        this.nombre = nombre
        this.telefono = telefono
    }
}
//crea una nueva clase Cliente que herede de Persona, esta nueva clase tendrá la variable credito solo para esa clase.
class Cliente extends Persona{
    constructor(edad, nombre, telefono, credito){
        super(edad,nombre,telefono)
        this.credito = credito
    }
}
//Crea ahora un objeto de la clase Cliente que debe tener como propiedades la edad, el telefono, el nombre y el credito,
const pepe = new Cliente(30,"Pepe", 111111, 10000);
//tienes que darles valor y mostrarlas por pantalla.
console.log(pepe);

//Una vez hecho esto, haz lo mismo con la clase Trabajador que herede de Persona, y
//con una variable salario que solo tenga la clase Trabajador.

class Trabajador extends Persona{
    constructor(edad,nombre,telefono,salario){
        super(edad,nombre,telefono)
        this.salario = salario
    }
}


const pepeTrabajo = new Trabajador(30,"Pepe",111111,5000)
console.log(pepeTrabajo);