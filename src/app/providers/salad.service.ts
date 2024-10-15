import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class SaladService {
    name!: string;
    tel!: string;

    constructor(){
        console.log('SaladService constructor');
    }
}