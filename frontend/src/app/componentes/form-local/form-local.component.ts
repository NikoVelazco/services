import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Local } from '../../models/local';
import { LocalService } from '../../services/local.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-local',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './form-local.component.html',
  styleUrl: './form-local.component.css'
})
export class FormLocalComponent {
  accion: string ="new"

  @ViewChild('formLocal') formLocal!: NgForm;
  local: Local;

  constructor(private localService: LocalService, private router:Router,
    private activatedRoute:ActivatedRoute){
    this.local = new Local();

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == "0") {
        this.accion = "new";        
      } else {
        this.accion = "update";
        this.cargarLocal(params['id']);
      }
    });
  }

  limpiarFormulario() {
    this.formLocal.reset();
  }

  public registrarLocal(){
    this.localService.crearLocal(this.local).subscribe(
      (result: any) => {
        if(result.status == 1){
          alert("Local Guardado");
          this.limpiarFormulario();
          this.router.navigate(['/local-tabla']);
        }
        console.log(result);
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

  cargarLocal(id:string):void{
    console.log(id);
    
    this.localService.obtenerLocalPorId(id).subscribe(
      (result: any) => {
        Object.assign(this.local, result);
      },
      (error: any) => {
        console.log(error);
      }
    );
      
  }

  modificarLocal(localModificado: Local){
    this.localService.modificarLocal(localModificado).subscribe(
      (result) => {
        if (result.status == 1) {
          alert("Local Modificado");
          this.router.navigate(['/local-tabla']);
        }
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
