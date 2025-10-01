import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FightersService } from '../../services/fighters.service';
import { IFighter } from '../../models/fighter';
import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-ajouter-combattant',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ajouter-combattant.html',
  styleUrl: './ajouter-combattant.css'
})
export class AjouterCombattant implements OnInit {

    isLoading = true;
  
  newFighter:IFighter = {
      
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

  constructor (private fighterService: FightersService) {}

  ngOnInit(): void {
      
  }

  onSubmit () {
      this.fighterService.createFighter(this.newFighter).subscribe({
          next : () => {
              toast.success(`Un nouveau combattant a été créé avec succès`);
              this.isLoading = false;
          },

          error : (err) => {
              toast.error(`Une errer s'est produite lors de la création : ${err} ${this.newFighter.FirstName}`);
              this.isLoading = false;
            },

          complete : () => {
              toast.success(`Création d'un combattant terminée avec succès`);
          }

      });


  }

  
}
