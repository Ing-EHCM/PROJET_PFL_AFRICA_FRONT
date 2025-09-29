import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './components/sidebar/sidebar';
import { NgxSonnerToaster } from "ngx-sonner";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sidebar, NgxSonnerToaster],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}