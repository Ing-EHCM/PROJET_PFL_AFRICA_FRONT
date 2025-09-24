import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FighterListComponent } from "./components/fighter-list.component/fighter-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FighterListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('MMA_MS');
}
