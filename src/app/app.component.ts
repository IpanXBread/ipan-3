import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { test } from '../shared/models/test';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Futurama2Component } from './futurama2/futurama2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf, CommonModule, RouterOutlet, RouterLink, RouterLinkActive, FormsModule, ReactiveFormsModule, Futurama2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  showFuturama: boolean = false;
  constructor(private router: Router) { }

  tests = [
    new test('something stringtext lalala'),
    new test('this one got boolean bro', true),
    new test('ijsw oisfjhosi gjg ogi sfjif')
  ]

  // tests : any = [
  // ]

  // tests: test[] = [
  // ]

  toggleFuturama() {
    this.showFuturama = !this.showFuturama;
    console.log("Futurama clicked");
  }

  navigateToRoute() {
    if (this.router.url === '/futurama-component2') {
      this.router.navigateByUrl('/');
    } else {
      this.router.navigateByUrl('/futurama-component2');
    }
    this.showFuturama = !this.showFuturama;
    console.log("Futurama clicked");
  }

  title = 'ipan-3';

}
