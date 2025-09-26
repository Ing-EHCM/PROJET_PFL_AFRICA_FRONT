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

    constructor (private fighterService : FightersService) {}



    ngOnInit(): void {
        this.fetchFighters();
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

}
