import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFighter } from '../models/fighter';

@Injectable({
  providedIn: 'root'
})
export class FightersService {

    // Déclaration de l'url de l'API
    private apiUrl = 'https://d99f836x-8000.euw.devtunnels.ms/api/fighters';

    // Constructeur qui sera appelé à l'instanciation du service et qui va 
    constructor (private http:HttpClient) {}

    fetchFighters (): Observable<IFighter []> {
      return this.http.get<IFighter []> (this.apiUrl);
    }

    getFighter (fighterId:number |string): Observable<IFighter> {
        return this.http.get<IFighter>(`${this.apiUrl}/${fighterId}`)
    }

    createFighter (fighter:IFighter):Observable<any> {
      const headers = new HttpHeaders({'content-type':'application/json'});
      return this.http.post<IFighter []>(this.apiUrl,fighter,{headers});
    }

    deleteFighter (fighterId:string|number):Observable<any> {
      return this.http.delete<IFighter []>(`${this.apiUrl}/${fighterId}`)
    }

    updateFighter (fighterId:string | number, fighter:IFighter):Observable<any> {
        return this.http.put<IFighter>(`${this.apiUrl}/${fighterId}`, fighter)
    }
}
