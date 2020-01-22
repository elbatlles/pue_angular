import {Component} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
})

export class BodyComponent{
  mostrar : boolean =false;
 colores : any = ['rojo','azul','amarillo'];
  frase: any = {
    autor:  'Homer Simpson',
    mensaje: 'Tendrá todo el dinero del mundo, pero hay algo que jamás podrá comprar: un dinosaurio'
};
 constructor(){}

 toogle(){
   this.mostrar =! this.mostrar;
 }
}
