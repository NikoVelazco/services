import { DatePipe } from "@angular/common";
import { Propietario } from './propietario';
import { Local } from './local';
export class Alquiler{
    _id!: string;
    propietario: Propietario;
    local: Local;
    plazomes: number;
    costoAlquiler: number;
    fechaAlquiler:string //cambiar luego a date

    constructor(){
        this.propietario = new Propietario();
        this.local = new Local();
        this.plazomes = 0;
        this.costoAlquiler = 0;
        this.fechaAlquiler = "";
    }
}