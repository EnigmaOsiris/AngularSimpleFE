import { Component, OnInit } from '@angular/core';
import{ Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  public title:string;
  public nombre: string;
  public apellidos: string;
  constructor(private _route:ActivatedRoute,
    private _router: Router) { 
    
    this.title="Page testing"
  }

  ngOnInit(): void {

    this._route.params.subscribe((params: Params)=>{
      this.nombre = params.nombre;
      this.apellidos=params.apellidos;      
    })
  }

  redireccion(){
    this._router.navigate(['/pageTest','Osiris','Enigma']);
  }

}
