import { Component, OnInit } from '@angular/core';
import { IFighter } from '../../models/fighter';
import { FightersService } from '../../services/fighters.service';
import {toast } from 'ngx-sonner';

@Component({
  selector: 'app-fighter.component',
  imports: [],
  templateUrl: './fighter.component.html',
  styleUrl: './fighter.component.css'
})
export class FighterComponent implements OnInit {
  
    fighters:IFighter [] = [];

    newFighter : IFighter = {
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
        updated_at : ""
    }

    constructor (private fighterService : FightersService) {}



    ngOnInit(): void {
        this.fetchFighters()
    }

    fetchFighters () {
        this.fighterService.fetchFighters().subscribe({
                next: (reponse) => {
                    this.fighters = reponse;
                },
                error : (error) => {
                    toast.error(`Réucpération a échouer`);
                },
                complete : () => {
                    toast.success(`Récupérations terminées avec succès`);
                    
                }
        });
    }
              
    

    createFighter () {
        this.fighterService.createFighter(this.newFighter).subscribe({

            next : (response) => {
                  console.log(`Combattant enregistré avec succès, ${response}`);
                  // Rafraisir les données 
                  this.fetchFighters();
            },

            error : (error) => {
                console.error(`Une erreur est survenue ${error}`);
            },

            complete : () => {
                console.log(`Entregistrement terminé`);
                
            }
                  
        });
    }
              
    

    deleteFighter (fighterId:string) {
        this.fighterService.deleteFighter(fighterId).subscribe({
            
            next : (fighterId)=> {
                  console.log(`combattant supprimé ${fighterId}`);
                  this.fetchFighters()
            },

            error : (error) => {
                  console.error(`Erreur de suppression ${error}`);
            },

            complete() {
                console.log(`Suppression terminée`);
                
            }

        });
          
              
    }
}
