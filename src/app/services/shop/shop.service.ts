import { Injectable } from '@angular/core';

import { Customer } from "../../models/customer.model";

@Injectable({
    providedIn: 'root'
})

export class ShopService {
    customer: Customer;

    constructor() { }

    emptyCart() {

    }
}
