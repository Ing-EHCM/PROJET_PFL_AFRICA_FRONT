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
  };

  onSubmit () {
      
  }

  
}
