import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Combattant {
  id: number;
  nom: string;
  prenom: string;
  age: number;
  weight: number;
  height: number;
  imc?: number;
  categorie: string;
  mmaWeightClass?: string;
}

@Component({
  selector: 'app-liste-combattants',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liste-combattants.html',
  styleUrls: ['./liste-combattants.css'] 
})
export class ListeCombattants {
  combattants: Combattant[] = [
    {
      id: 1,
      nom: 'Paul Barrè',
      prenom: 'Beavogui',
      age: 20,
      weight: 75,
      height: 180,
      categorie: 'Moyen'
    },
    {
      id: 2,
      nom: 'Marie',
      prenom: 'Sia Diawara',
      age: 25,
      weight: 60,
      height: 170,
      categorie: 'Léger'
    }
  ];

  filterTable(event: Event) {
    const input = (event.target as HTMLInputElement).value.toLowerCase();
    const table = document.getElementById('userTable') as HTMLTableElement;
    const rows = table.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) { 
      const cells = rows[i].getElementsByTagName('td');
      const Nom = cells[1].innerText.toLowerCase();
      const Prenom = cells[2].innerText.toLowerCase();
      const Category = cells[7].innerText.toLowerCase();

      if (Nom.includes(input) || Prenom.includes(input) || Category.includes(input)) {
        rows[i].style.display = '';
      } else {
        rows[i].style.display = 'none';
      }
    }
  }

  afficherCombattant(id: number) {
    console.log('Afficher combattant:', id);
    const combattant = this.combattants.find(c => c.id === id);
    alert(`Détails de ${combattant?.prenom} ${combattant?.nom}`);
    // Navigation vers la page détail plus tard
  }

  modifierCombattant(id: number) {
    console.log('Modifier combattant:', id);
    const combattant = this.combattants.find(c => c.id === id);
    if (confirm(`Modifier ${combattant?.prenom} ${combattant?.nom} ?`)) {
      // Logique de modification
    }
  }

  supprimerCombattant(id: number) {
    console.log('Supprimer combattant:', id);
    const combattant = this.combattants.find(c => c.id === id);
    if (confirm(`Êtes-vous sûr de vouloir supprimer ${combattant?.prenom} ${combattant?.nom} ?`)) {
      this.combattants = this.combattants.filter(c => c.id !== id);
    }
  }
}