import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})  
export class ContrasenaPipe implements PipeTransform {

  transform(value: unknown, miActivo:boolean, miNombre:string): string {
    console.log(value); 
    console.log({miActivo, miNombre})

    if (miActivo) {

      return miNombre; 

    }else{

      return '*'.repeat(miNombre.length);
    }

    
  }

}
