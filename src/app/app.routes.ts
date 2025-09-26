import { Routes } from '@angular/router';
import { ListeCombattants } from './components/liste-combattants/liste-combattants';
import { AjouterCombattant } from './components/ajouter-combattant/ajouter-combattant';


export const routes: Routes = [
  { path: 'combattants', component: ListeCombattants },
  { path: 'ajouter-combattant', component: AjouterCombattant },
  { path: '', redirectTo: '/combattants', pathMatch: 'full' },
  { path: '**', redirectTo: '/combattants' }
];
