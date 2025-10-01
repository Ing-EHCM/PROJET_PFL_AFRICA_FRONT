import { Component, isStandalone, OnInit } from '@angular/core';
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
    
  isLoading :boolean = true;
  error :string = "";
  // Tableau de combattants
  fighters :IFighter[]= [
    // { id: 1, FirstName: 'Paul', LastName: 'Beavogui', age: 20, weight: 75, height: 180 , BMI:23,BMI_Category:"Normale", MMA_Weight_class:"Poids lourd",created_at : "2025-01-01",updated_at : "2025-03-03"},
    // { id: 2, FirstName: 'Paul', LastName: 'Beavogui', age: 20, weight: 75, height: 180 , BMI:23,BMI_Category:"Normale", MMA_Weight_class:"Poids lourd",created_at : "2025-01-01",updated_at : "2025-03-03"},
    // { id: 3, FirstName: 'Paul', LastName: 'Beavogui', age: 20, weight: 75, height: 180 , BMI:23,BMI_Category:"Normale", MMA_Weight_class:"Poids lourd",created_at : "2025-01-01",updated_at : "2025-03-03"},
    // { id: 4, FirstName: 'Paul', LastName: 'Beavogui', age: 20, weight: 75, height: 180 , BMI:23,BMI_Category:"Normale", MMA_Weight_class:"Poids lourd",created_at : "2025-01-01",updated_at : "2025-03-03"},
    // { id: 5, FirstName: 'Paul', LastName: 'Beavogui', age: 20, weight: 75, height: 180 , BMI:23,BMI_Category:"Normale", MMA_Weight_class:"Poids lourd",created_at : "2025-01-01",updated_at : "2025-03-03"}
    
  ];

    constructor(private fighterService:FightersService) {}

    ngOnInit(): void {
      this.isLoading = true;
        this.fetchFighters()
    }

    //Récupération des données à partir de l'API
    fetchFighters() {
        this.isLoading = true;
        this.fighterService.fetchFighters().subscribe({
            next: (response)=> {
                this.fighters = response
                this.isLoading = false;
                
            },

            error : (err) => {
                toast.error(`Réucpération a échouer ${err}`);
                this.isLoading = false;
                this.error = err;
            },
            complete : () => {
                toast.success(`Récupérations terminées avec succès`);
                this.isLoading = false;
                
            }
        });
    }

    getFighterById(id:string | number) {
        this.isLoading = true;
        this.fighterService.getFighterById(id).subscribe({
            next : (response) => {
                this.fighters = [];
                this.fighters.push(response);
                this.isLoading = false;
            },

            error: (err) => {
                toast.error(`Une erreur est survenue : ${err}`);
                this.error = err;
                this.isLoading = false;
            },

            complete : () => {
                toast.success(`Requête terminée avec succès`);
                this.isLoading = false;
            }
        });
    }

    deleteFighter (id:number | string) {
      this.isLoading = true;
        this.fighterService.deleteFighter(id).subscribe ({
            next : (response) => {
                toast.success(`${response} supprimé avec succès`)
                this.fighters = this.fighters.filter(fighter => {fighter.id!== id})
                this.isLoading = false;
            },

            error : (err) => {
                toast.success(`Une erreur s'est produite lors de la suppression. ${err}`)
                this.error = err;
                this.isLoading = false;
            },

            complete : () => {
                toast.success(`Opération terminée avec succès`);
                this.isLoading = false;
            },
        })
    }


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
