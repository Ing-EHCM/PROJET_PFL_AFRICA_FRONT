import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IFighter } from '../../models/fighter';
import { FightersService } from '../../services/fighters.service';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-liste-combattants',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './liste-combattants.html',
  styleUrls: ['./liste-combattants.css']
})

export class ListeCombattants implements OnInit{
    
  // Tableau de combattants
  fighters :IFighter[]= [
    // { id: 1, FirstName: 'Paul', LastName: 'Beavogui', age: 20, weight: 75, height: 180 , BMI:23,BMI_Category:"Normale", MMA_Weight_class:"Poids lourd",created_at : "2025-01-01",updated_at : "2025-03-03"},
    // { id: 2, FirstName: 'Paul', LastName: 'Beavogui', age: 20, weight: 75, height: 180 , BMI:23,BMI_Category:"Normale", MMA_Weight_class:"Poids lourd",created_at : "2025-01-01",updated_at : "2025-03-03"},
    // { id: 3, FirstName: 'Paul', LastName: 'Beavogui', age: 20, weight: 75, height: 180 , BMI:23,BMI_Category:"Normale", MMA_Weight_class:"Poids lourd",created_at : "2025-01-01",updated_at : "2025-03-03"},
    // { id: 4, FirstName: 'Paul', LastName: 'Beavogui', age: 20, weight: 75, height: 180 , BMI:23,BMI_Category:"Normale", MMA_Weight_class:"Poids lourd",created_at : "2025-01-01",updated_at : "2025-03-03"},
    // { id: 5, FirstName: 'Paul', LastName: 'Beavogui', age: 20, weight: 75, height: 180 , BMI:23,BMI_Category:"Normale", MMA_Weight_class:"Poids lourd",created_at : "2025-01-01",updated_at : "2025-03-03"}
    
  ];
figthers: any;
    constructor(private fighterService:FightersService) {}

    ngOnInit(): void {
        this.fetchFighters()
    }

    //Récupération des données à partir de l'API
    fetchFighters() {
        this.fighterService.fetchFighters().subscribe({
            next: (response)=> {
                this.fighters = response

            },

            error : (error) => {
                toast.error(`Réucpération a échouer ${error}`);
            },
            complete : () => {
                toast.success(`Récupérations terminées avec succès`);
                
            }
        });
    }

    getFighterById(id:string | number) {
        this.fighterService.getFighterById(id).subscribe({
            next : (response) => {
                this.fighters = [];
                this.fighters.push(response);
            },

            error: (error) => {
                toast.error(`Une erreur est survenue : ${error}`);
            },

            complete : () => {
                toast.success(`Requête terminée avec succès`);
            }
        });
    }

    deleteFighter (id:number | string) {
        this.fighterService.deleteFighter(id).subscribe ({
            next : (response) => {
                toast.success(`${response} supprimé avec succès`)
            },

            error : (erreur) => {
                toast.success(`Une erreur s'est produite lors de la suppression. ${erreur}`)

            },

            complete() {
                toast.success(`Opération terminée avec succès`)

            },
        })
    }

    // figther:IFighter={
    //   id : 0,
    //   FirstName : "",
    //   LastName : "",
    //   age : 0,
    //   weight : 0,
    //   height : 0,
    //   BMI : 0,
    //   BMI_Category : "",
    //   MMA_Weight_class : "",
    //   created_at : "",
    //   updated_at : "",
    // }
   
  

  // Données pour la modale
  showModal = false;
  combattantEnEdition: any = null;

  // Fonction de recherche
  filterTable(event: Event) {
    const input = (event.target as HTMLInputElement).value.trim().toLowerCase();
    const table = document.getElementById('userTable') as HTMLTableElement | null;

    if (!table) return;

    const rows = table.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) {
      const cells = rows[i].getElementsByTagName('td');

      const Nom = cells[1]?.innerText?.toLowerCase() || '';
      const Prenom = cells[2]?.innerText?.toLowerCase() || '';
      const Category = cells[7]?.innerText?.toLowerCase() || '';

      if (Nom.includes(input) || Prenom.includes(input) || Category.includes(input)) {
        rows[i].style.display = '';
      } else {
        rows[i].style.display = 'none';
      }
    }
  }

  // Ouvrir la modale d’édition
  ouvrirModal(combattant: any) {
    this.combattantEnEdition = { ...combattant }; 
    this.showModal = true;
  }

  // Enregistrer les modifications
  enregistrer() {
    const index = this.fighters.findIndex(c => c.id === this.combattantEnEdition.id);
    if (index !== -1) {
      this.fighters[index] = { ...this.combattantEnEdition };
    }
    this.showModal = false;
  }

 
}
