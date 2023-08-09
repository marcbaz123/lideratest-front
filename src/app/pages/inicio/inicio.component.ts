import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  public menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
