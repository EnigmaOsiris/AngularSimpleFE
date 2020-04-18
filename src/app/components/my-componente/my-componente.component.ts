import {Component} from '@angular/core';

@Component({
    selector: 'my-componente',
    templateUrl: './my-componente.component.html'
})
export class MyComponente{
    public titulo: string;
    public comentario: string;
    public year: number;
    public mostrarPeliculas: boolean;

    constructor(){
        this.titulo="hola mundo";
        this.comentario="comentario";
        this.year=2020;
        this.mostrarPeliculas=true;
        console.log("componente cargado");  
        console.log(this.titulo,this.comentario);
              
    }

    ocultarPeliculas(){
        this.mostrarPeliculas=false;
    }

}