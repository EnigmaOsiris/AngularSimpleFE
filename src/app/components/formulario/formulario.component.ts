import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public title: string;
  public user: any;
  public campo: string;
  constructor() { 
    this.title="Formulario";
    this.user={
      nombre:'',
      apellidos:'',
      bio:'',
      genero:''
    }
  }
  ngOnInit(): void {
  }

  onSubmit(){    
    alert("hola");
    console.log(this.user);    
  }

  click(){
    alert("click")
  }
  hasSalido(){
    alert("saliste");
  }
}
