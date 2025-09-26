import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListeCombattants } from './components/liste-combattants/liste-combattants';
import { Sidebar } from './components/sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
