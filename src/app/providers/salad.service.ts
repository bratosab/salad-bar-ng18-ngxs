import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Topping } from "../models/topping.model";

@Injectable({
    providedIn: 'root'
})
export class SaladService {
    name!: string;
    tel!: string;

    constructor(private http: HttpClient){
        console.log('SaladService constructor');
    }

    /**
     * Fetch toppings from API
     * @returns an Observable of Toppings[]
     */
    getToppings() {
        return this.http.get<Topping[]>('https://retoolapi.dev/udhTkG/toppings')
    }
}