import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Local } from '../../models/local';
import { Alquiler } from '../../models/alquiler';
import { Propietario } from '../../models/propietario';
import { LocalService } from '../../services/local.service';
import { PropietarioService } from '../../services/propietario.service';
import { AlquilerService } from '../../services/alquiler.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-alquiler',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './form-alquiler.component.html',
  styleUrl: './form-alquiler.component.css'
})
export class FormAlquilerComponent {

  accion: string ="new"
  @ViewChild('formAlquiler') formAlquiler!: NgForm;
  local: Local;
  alquiler: Alquiler;
  propietario: Propietario;
  locales: Array<Local>;
  propietarios: Array<Propietario>;

  constructor(private localService: LocalService, private propietarioService: PropietarioService, 
    private router:Router, private alquilerService: AlquilerService,
    private activatedRoute:ActivatedRoute){
    this.local = new Local();
    this.propietario = new Propietario();
    this.locales = new Array();
    this.propietarios = new Array();
    this.alquiler = new Alquiler();
    this.obtenerLocales();
    this.obtenerPropietarios();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == "0") {
        this.accion = "new";        
      } else {
        this.accion = "update";
        this.cargarAlquiler(params['id']);
      }
    });
  }

  public obtenerLocales(){
    this.locales = [];
    this.localService.obtenerLocales().subscribe(
      /*(result: any) => {
        this.locales = result;
      },
      (error: any) => {
        console.log(error);
      }*/
        result => {
          console.log(result);
          let vlocal: Local = new Local();
          result.forEach((element: any) => {
            Object.assign(vlocal, element);
            this.locales.push(vlocal);
            vlocal = new Local();
          })
          console.log(this.locales);
        },
        error => {
          console.log(error);
        }
    )
  }

  limpiarFormulario() {
    this.formAlquiler.reset();
  }

  public obtenerPropietarios(){
    this.propietarios = [];
    this.propietarioService.obtenerPropietarios().subscribe(
      /*(result) => {
        console.log(result);
        this.propietarios = result;
      },
      (error) => {
        console.log(error);
      }*/
        result => {
          console.log(result);
          let vpropietario: Propietario = new Propietario();
          result.forEach((element: any) => {
            Object.assign(vpropietario, element);
            this.propietarios.push(vpropietario);
            vpropietario = new Propietario();
          })
          console.log(this.propietarios);
        },
        error => {
          console.log(error);
        }
    )
  }

  public crearAlquiler(){
    console.log(this.alquiler)
    this.alquilerService.crearAlquiler(this.alquiler).subscribe(
      (result: any) => {
        if(result.status == 1){
          alert("Alquiler Guardado");
          this.limpiarFormulario();
          //this.router.navigate(['/alquiler-tabla']);
        }
        console.log(result);
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

  public modificarAlquiler(alquilerModificado: Alquiler){
    this.alquilerService.modificarAlquiler(alquilerModificado).subscribe(
      (result) => {
        if (result.status == 1) {
          alert("Alquiler Modificado");
          this.router.navigate(['/Alquiler-tabla']);
        }
      },
      (error) => {
        console.log(error);
      }
    )
  }

  cargarAlquiler(id:string):void{
    console.log(id);
    
    this.alquilerService.obtenerAlquilerPorId(id).subscribe(
      (result: any) => {
        Object.assign(this.alquiler, result);
        this.alquiler.local=this.locales.find(local => (local._id === this.alquiler.local._id))!
        this.alquiler.propietario=this.propietarios.find(propietario => (propietario._id === this.alquiler.propietario._id))!
      },
      (error: any) => {
        console.log(error);
      }
    );
      
  }

}
