export class Propietario{
    _id!: string;
    nombre: string;
    apellido: string;
    dni: string;
    email: string;
    telefono: string;

    constructor(){
        this.nombre = "";
        this.apellido = "";
        this.dni = "";
        this.email = "";
        this.telefono = "";
    }

}