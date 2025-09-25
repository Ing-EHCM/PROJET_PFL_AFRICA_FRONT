import { Component } from '@angular/core';

@Component({
  selector: 'app-liste-combattants',
  templateUrl: './liste-combattants.html',
  styleUrls: ['./liste-combattants.css'] 
})
export class ListeCombattants {
  filterTable(event: Event) {
    const input = (event.target as HTMLInputElement).value.toLowerCase();
    const table = document.getElementById('userTable') as HTMLTableElement;
    const rows = table.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) { 
      const cells = rows[i].getElementsByTagName('td');
      const firstName = cells[1].innerText.toLowerCase();
      const lastName = cells[2].innerText.toLowerCase();
      const bmiCategory = cells[7].innerText.toLowerCase();

      if (firstName.includes(input) || lastName.includes(input) || bmiCategory.includes(input)) {
        rows[i].style.display = '';
      } else {
        rows[i].style.display = 'none';
      }
    }
  }
}
