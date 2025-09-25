import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListeCombattants } from './components/liste-combattants/liste-combattants';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ListeCombattants],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
