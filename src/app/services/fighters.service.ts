import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFighter } from '../models/fighter';

@Injectable({
  providedIn: 'root'
})
export class FightersService {
    
    private apiUrl = 'https://d99f836x-8000.euw.devtunnels.ms/api/fighters';

    constructor (private http:HttpClient) {}

    fetchFighters (): Observable<IFighter []> {
      return this.http.get<IFighter []> (this.apiUrl);
    }

    createFighter (fighter:IFighter) {
      const headers = new HttpHeaders({'content-type':'application/json'});
      return this.http.post<IFighter []>(this.apiUrl,fighter,{headers});
    }

    deleteFighter (fighterId:number | string) {
      return this.http.delete<IFighter []>(`${this.apiUrl}/${fighterId}`)
    }
}
