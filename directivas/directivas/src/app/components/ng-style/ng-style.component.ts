import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
 
   <p [ngStyle]="{'font-size': tam + 'px'}">

 <!-- <p [style.fontSize]="'28px'"> -->
    
  Probando ngStyle...
 </p>
 <button class="btn btn-primary" (click)="tam = tam + 5">
      <i class="fa fa-plus"></i>   </button>
    <button class="btn btn-primary" (click)="tam = tam - 5">
      <i class="fa fa-minus"></i>  </button>

  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tam: number = 15;

  constructor() { }

  ngOnInit() {
  }

}
