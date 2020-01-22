import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Peter';
  apellido = 'Parker';
  numero = Math.floor(Math.random() * (11 - 1)) + 1;
}
