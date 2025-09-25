import { Component, OnInit } from '@angular/core';
import { IFighter } from '../../models/fighter';
import {addFighterToStorage, getFightersFromStorage, deleteFighterToStorage} from '../../utils/storage';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FightersService } from '../../services/fighters.service';

@Component({
  selector: 'app-fighter-list-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './fighter-list.component.html',
  styleUrl: './fighter-list.component.css'
})
export class FighterListComponent implements OnInit{

    constructor (private fighterService:FightersService) {}

    ngOnInit(): void {
        
    }

    

    fighters : IFighter[] = getFightersFromStorage();
    // fighters : IFighter [] = [
    //     {
    //         id : 4,
    //         first_name : "IBRAHIMA",
    //         last_name : "DIA",
    //         age : 38,
    //         weight_kg : 80,
    //         height_cm : 198,
    //         bmi : 25,
    //         bmi_category : "Normale",
    //         mma_weight_class : "LOurd",
    //         created_at : "2025-01-01",
    //         updated_at : "2025-01-01"
    //     }
    // ]   
    deleteFighter(id:number) {
        deleteFighterToStorage(id)
        console.log("delete")
    }

    
    
    store() {
        for (let fighter of this.fighters )  
            addFighterToStorage(fighter);
    }
}




