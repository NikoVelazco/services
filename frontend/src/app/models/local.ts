export class Local{
    _id!: string;
    nombreLocal: string;
    superficie: string;
    habilitado: boolean;
    costoMes: number;
    pathimagen: string;
    alquilado: boolean;

    constructor(){
        this.nombreLocal = "";
        this.superficie = "";
        this.habilitado = false;
        this.costoMes = 0;
        this.pathimagen = "";
        this.alquilado = false;
    }
}