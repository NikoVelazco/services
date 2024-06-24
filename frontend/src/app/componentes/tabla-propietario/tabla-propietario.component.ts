import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Propietario } from '../../models/propietario';
import { PropietarioService } from '../../services/propietario.service';

@Component({
  selector: 'app-tabla-propietario',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './tabla-propietario.component.html',
  styleUrl: './tabla-propietario.component.css'
})
export class TablaPropietarioComponent {

  propietarios: Array<Propietario>;

  constructor(private propietarioService: PropietarioService, private router:Router,
    private activatedRoute:ActivatedRoute){
      this.propietarios = new Array();
      this.obtenerPropietarios();
  }

  public obtenerPropietarios(){
    this.propietarios = [];
    this.propietarioService.obtenerPropietarios().subscribe(
      (result) => {
        console.log(result);
        this.propietarios = result;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  public eliminarPropietario(id: string){
    this.propietarioService.deletePropietario(id).subscribe(
      (result) => {
        console.log(result);
        this.obtenerPropietarios();
      },
      (error) => {
        console.log(error);
      }
    )
  }

  modificarPropietario(id:string){
    
    this.router.navigate(['alta-propietario/',id]);

  }


}
