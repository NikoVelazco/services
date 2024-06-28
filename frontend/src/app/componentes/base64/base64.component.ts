import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core'; 
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-base64',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './base64.component.html',
  styleUrl: './base64.component.css'
})
export class Base64Component implements OnInit{
  imagen ="";
  files: { base64: string, safeurl: SafeUrl }[] = []; 
  constructor(private domSanitizer: DomSanitizer) { } 
  ngOnInit(): void { }
  onFileSelected(event: any) { 
    const files = event.target.files; 
    for (let i = 0; i < files.length; i++) { 
      const file = files[i]; 
      //inicio lector de archivo 
      const reader = new FileReader(); 
      //declaro el comportamiento del onload cuando el reader carga o lee algo 
      reader.onload = () => {
        let base64 = reader.result as string; 
        let safeurl:SafeUrl = this.domSanitizer.bypassSecurityTrustUrl(base64); 
        this.files.push({ 'base64': base64, 'safeurl': safeurl });
        this.imagen = base64; 
      }; 
      //hago que el reader lea un archivo 
      reader.readAsDataURL(file); 
    }

  }
}
