import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre    :string  ='Capitan America';
  nombre2   :string  ='eLi mOrA lUzaRDo'
  arreglo            =[1,2,3,4,5,6,7,8,9,10]; 
  PI        :number  =Math.PI; 
  porcentaje:number  =.234; 
  salario   :number  =1234.5; 
  fecha     :Date    = new Date(); 
  activar   :boolean =true; 
  idioma    :string  ='fr'; 

  Activar(){
    this.activar=!this.activar;
    console.log(this.activar)

  }
  SelecIdioma(miSelecc:string){
    this.idioma=miSelecc; 
  }

  videoUrl:string='https://www.youtube.com/embed/cedrbpeoicY'
  
  valorPromesa = new Promise<string>((resolve)=>{
    setTimeout(() => {
      resolve('Llego la data')
    }, 4500);
  }); 

  heroe={
    nombre   :'Logan', 
    clave    :'Wolverine', 
    edad     :500, 
    direccion: {
      calle: 'Primera', 
      casa : 20
    }
  }

}
