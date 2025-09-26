import { Routes } from '@angular/router';
import { ListeCombattants } from './components/liste-combattants/liste-combattants';

export const routes: Routes = [
    {path:'',pathMatch:'full',redirectTo:'listeCombattant'},
    {path:'listeCombattant',component:ListeCombattants},
    
];
