import { Component, OnInit } from '@angular/core';
import { FightersService } from '../../services/fighters.service';

@Component({
  selector: 'app-liste-combattants',
  templateUrl: './liste-combattants.html',
  styleUrls: ['./liste-combattants.css'] 
})
export class ListeCombattants implements OnInit{


  constructor (private fightersService : FightersService) {}

  ngOnInit(): void {
      this.fetchFighters();
  }

  fetchFighters () {
      this.fightersService.fetchFighters()
  }

  deleteFighter () {

  }

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
}
