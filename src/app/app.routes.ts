import { Routes } from '@angular/router';
import { ListeCombattants } from './components/liste-combattants/liste-combattants';
import { AjouterCombattant } from './components/ajouter-combattant/ajouter-combattant';

export const routes: Routes = [
    {path:'',pathMatch:'full',redirectTo:'AjouterCombattant'},
    {path:'listeCombattant',component:ListeCombattants},
    {path:'ajouterCombattant',component:AjouterCombattant},
];
