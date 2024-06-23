import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LocalService } from '../../services/local.service';
import { Local } from '../../models/local';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tabal-local',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './tabal-local.component.html',
  styleUrl: './tabal-local.component.css'
})
export class TabalLocalComponent {

  locales: Array<Local>;
  accion: string = "new";

  constructor(private localService: LocalService, private activateRoute: ActivatedRoute,
    private router: Router){
    this.locales = new Array();
    this.obtenerLocales();
  }

  public obtenerLocales(){
    this.locales = [];
    this.localService.obtenerLocales().subscribe(
      (result) => {
        console.log(result);
        this.locales = result;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  modificarLocal(id:string){
    
    this.router.navigate(['alta-local/',id]);

  }

  public eliminarLocal(id: string){
    this.localService.eliminarLocal(id).subscribe(
      (result) => {
        console.log(result);
        this.obtenerLocales();
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
