import { Component, ViewChild } from '@angular/core';
import { PropietarioService } from '../../services/propietario.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Propietario } from '../../models/propietario';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-propietario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form-propietario.component.html',
  styleUrl: './form-propietario.component.css'
})
export class FormPropietarioComponent {

  accion: string = "new";  
  propietario: Propietario;
  @ViewChild('formPropietario') formPropietario!: NgForm;

  constructor(private propietarioService: PropietarioService, private router:Router,
    private activatedRoute:ActivatedRoute){
      this.propietario = new Propietario();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == "0") {
        this.accion = "new";        
      } else {
        this.accion = "update";
        this.cargarPropietario(params['id']);
      }
    });
  }

  limpiarFormulario() {
    this.formPropietario.reset();
  }

  public crearPropietario(){
    this.propietarioService.crearPropietario(this.propietario).subscribe(
      (result: any) => {
        if(result.status == 1){
          alert("Propietario Guardado");
          this.limpiarFormulario();
          //this.router.navigate(['/propie']);
        }
        console.log(result);
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

  public modificarPropietario(propietario: Propietario){
    this.propietarioService.editarPropietario(propietario).subscribe(
      (result: any) => {
        if(result.status == 1){
          alert("Propietario Modificado");
          this.router.navigate(['/propietario-tabla']);
        }
        console.log(result);
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

  public cargarPropietario(id: string){
    this.propietarioService.obtenerPropietarioPorId(id).subscribe(
      (result: any) => {
        Object.assign(this.propietario, result);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

}
