import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FightersService {
    
    private apiUrl = 'https://crudcrud.com/api/fighter' //'https://d99f836x-8000.euw.devtunnels.ms/api/fighters';

    constructor (private http:HttpClient) {}

    fetchFighters (): Observable<any []> {
      return this.http.get<any []> (this.apiUrl);
    }

    createFighter (fighter:any) {
      const headers = new HttpHeaders({'content-type':'application/json'});
      return this.http.post<any []>(this.apiUrl,fighter,{headers});
    }

    deleteFighter (fighterId:any) {
      return this.http.delete<any []>(`${this.apiUrl}/${fighterId}`)
    }
}
