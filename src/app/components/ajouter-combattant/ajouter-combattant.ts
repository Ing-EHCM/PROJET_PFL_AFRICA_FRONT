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
  
  newFighter = {
      id :  0,
      first_name : "",
      last_name : "",
      age : 0,
      weight_kg : 0,
      height_cm : 0,
      bmi : 0,
      bmi_category : "",
      mma_weight_class : "",
      created_at : "",
      updated_at : "",
  };

  onSubmit() {
    console.log('Nouveau combattant:', this.newFighter);
    
  }
}
