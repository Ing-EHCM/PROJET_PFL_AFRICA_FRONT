import { Component } from '@angular/core';
import { IFighter } from '../../models/fighter';

@Component({
  selector: 'app-fighter-list-component',
  imports: [],
  templateUrl: './fighter-list.component.html',
  styleUrl: './fighter-list.component.css'
})
export class FighterListComponent {
    fighters : IFighter []= [
        {
            id : 1,
            first_name : "SADA",
            last_name : "MBAYE",
            age : 38,
            weight_kg : 80,
            height_cm : 190,
            bmi : 40,
            bmi_category : "kfrhr",
            mma_weight_class : "dcjiu",
            created_at : "2025-01-01",
            updated_at : "2025-01-01"
        },

        {
            id : 2,
            first_name : "SADA",
            last_name : "MBAYE",
            age : 38,
            weight_kg : 80,
            height_cm : 190,
            bmi : 40,
            bmi_category : "kfrhr",
            mma_weight_class : "dcjiu",
            created_at : "2025-01-01",
            updated_at : "2025-01-01"
        },

        {
            id : 3,
            first_name : "SADA",
            last_name : "MBAYE",
            age : 38,
            weight_kg : 80,
            height_cm : 190,
            bmi : 40,
            bmi_category : "kfrhr",
            mma_weight_class : "dcjiu",
            created_at : "2025-01-01",
            updated_at : "2025-01-01"
        }
    ]
}
