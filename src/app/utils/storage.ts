import { IFighter } from "../models/fighter";

export function getFightersFromStorage () : IFighter [] {
    const fighters  = localStorage.getItem("fighters_db");
    return fighters?JSON.parse(fighters): [];
}


export function addFighterToStorage(fighter : IFighter) : void {
    const fighters : IFighter [] = getFightersFromStorage();
    if (fighter)    fighters.push(fighter);
    localStorage.setItem("fighters_db", JSON.stringify(fighters));
}

export function deleteFighterToStorage (id:number):void {
    const fighters:IFighter [] = getFightersFromStorage();
    const fightersStorage:IFighter [] = fighters.filter((fighter) => id != fighter.id);

    if (localStorage.getItem("fighters_db"))
        localStorage.removeItem("fighters_db");
    for (let fighter of fightersStorage) {
        addFighterToStorage(fighter)
    }
}

export function updateFighterInStorage(id: number) : void {
    const fighters:IFighter [] = getFightersFromStorage();
    
}
