import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl:'clases.component.html',
  styles: []
})
export class ClasesComponent implements OnInit {

  alerta: string ="alert-danger";  
  propiedades:any  = { danger: false };

  constructor() { }

  ngOnInit() {
  }

  loading = false;

  ejecutar() {
     this.loading = true;
     setTimeout( () => this.loading = false, 3000);
    // setTimeout(this.change, 3000);
  }
  change(){

  }


}
