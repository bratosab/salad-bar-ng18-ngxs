import { Topping } from "../../models/topping.model"

export class FetchToppings {
    static readonly type = '[Salad] Fetch Toppings'
}

export class ChooseTopping {
    static readonly type = '[Salad] Choose Topping'

    constructor(public topping: Topping){}
}