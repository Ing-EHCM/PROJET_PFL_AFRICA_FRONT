import { Component, OnInit } from '@angular/core';
import { IFighter } from '../../models/fighter';
import { FightersService } from '../../services/fighters.service';

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
        this.fighterService.fetchFighters()
            .subscribe(
              (response) => {
                this.fighters = response;
              },
              (error) => {
                console.error(error)
              }
            );
    }

    createFighter () {
        this.fighterService.createFighter(this.newFighter)
          .subscribe(
              (response) => {
                  console.log(`Combattant enregistré avec succès, ${response}`);
                  // Rafraisir les données 
                  this.fetchFighters();
              },
              (error) => {
                  console.error(`Une erreur est survenue lors de l'enregistrement ${error}`);
              }

          );
    }

    deleteFighter (fighterId:number) {
        this.fighterService.deleteFighter(fighterId)
          .subscribe(
              ()=> {
                  console.log(`combattant supprimé`);
                  this.fetchFighters()
              },
              (error) => {
                  console.error(`Erreur de suppression ${error}`);
                  
              },
              
          );
    }
}
