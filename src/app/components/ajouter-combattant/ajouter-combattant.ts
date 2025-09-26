import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ajouter-combattant',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ajouter-combattant.html',
  styleUrl: './ajouter-combattant.css'
})
export class AjouterCombattant {
  nouveauCombattant = {
    nom: '',
    prenom: '',
    age: 0,
    poids: 0,
    taille: 0
  };

  onSubmit() {
    console.log('Nouveau combattant:', this.nouveauCombattant);
    // Ici vous pourrez ajouter la logique pour sauvegarder le combattant
    alert('Combattant ajouté avec succès !');
    
    // Réinitialiser le formulaire
    this.nouveauCombattant = {
      nom: '',
      prenom: '',
      age: 0,
      poids: 0,
      taille: 0
    };
  }
}
