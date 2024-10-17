import { HttpErrorResponse } from '@angular/common/http';
import { Topping } from '../../models/topping.model';

const ACTION_SCOPE = '[Salad]';

export class FetchToppings {
  static readonly type = `${ACTION_SCOPE} Fetch Toppings`;
}

export class ChooseTopping {
  static readonly type = `${ACTION_SCOPE} Choose Topping`;

  constructor(public topping: Topping) {}
}

export namespace Toppings {
  export class Fetch {
    static readonly type = `${ACTION_SCOPE} Fetch Toppings`;
  }
  export class Success {
    static readonly type = `${ACTION_SCOPE} Fetch Toppings Success`;
    constructor(public toppings: Topping[]) {}
  }
  export class Error {
    static readonly type = `${ACTION_SCOPE} Fetch Toppings Error`;
    constructor(public error: HttpErrorResponse) {}
  }
}
