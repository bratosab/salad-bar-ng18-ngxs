import { Store } from "@ngxs/store";
import { OrderStateModel } from "../store/order.state";

export class SaladStore extends Store {
    selectOrderSnapshot(callback: (state: { order: OrderStateModel}) => any) {
        return super.selectSnapshot(callback)
    }
}