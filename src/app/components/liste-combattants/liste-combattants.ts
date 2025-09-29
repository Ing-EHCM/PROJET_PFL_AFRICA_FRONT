import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IFighter } from '../../models/fighter';

@Component({
  selector: 'app-liste-combattants',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './liste-combattants.html',
  styleUrls: ['./liste-combattants.css']
})

export class ListeCombattants {
    
    
    figther:IFighter={
      id : 0,
      FirstName : "",
      LastName : "",
      age : 0,
      weight : 0,
      height : 0,
      BMI : 0,
      BMI_Category : "",
      MMA_Weight_class : "",
      created_at : "",
      updated_at : "",
    }
   
  // Tableau de combattants
  figthers :IFighter[]= [
    { id: 1, FirstName: 'Paul', LastName: 'Beavogui', age: 20, weight: 75, height: 180 , BMI:23,BMI_Category:"Normale", MMA_Weight_class:"Poids lourd",created_at : "2025-01-01",updated_at : "2025-03-03"},
    { id: 2, FirstName: 'Paul', LastName: 'Beavogui', age: 20, weight: 75, height: 180 , BMI:23,BMI_Category:"Normale", MMA_Weight_class:"Poids lourd",created_at : "2025-01-01",updated_at : "2025-03-03"},
    { id: 3, FirstName: 'Paul', LastName: 'Beavogui', age: 20, weight: 75, height: 180 , BMI:23,BMI_Category:"Normale", MMA_Weight_class:"Poids lourd",created_at : "2025-01-01",updated_at : "2025-03-03"},
    { id: 4, FirstName: 'Paul', LastName: 'Beavogui', age: 20, weight: 75, height: 180 , BMI:23,BMI_Category:"Normale", MMA_Weight_class:"Poids lourd",created_at : "2025-01-01",updated_at : "2025-03-03"},
    { id: 5, FirstName: 'Paul', LastName: 'Beavogui', age: 20, weight: 75, height: 180 , BMI:23,BMI_Category:"Normale", MMA_Weight_class:"Poids lourd",created_at : "2025-01-01",updated_at : "2025-03-03"}
    
  ];

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
    const index = this.figthers.findIndex(c => c.id === this.combattantEnEdition.id);
    if (index !== -1) {
      this.figthers[index] = { ...this.combattantEnEdition };
    }
    this.showModal = false;
  }

 
}
