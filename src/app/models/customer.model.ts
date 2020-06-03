import { User } from './user.model';
import { Product } from './product.model';

export interface Customer extends User {
    cart: Product[];

    company?: string;
    tel?: string;
    fax?: string;

    gender?: 'male' | 'female' | 'company';
}

export interface CustomerCheckout extends Customer {
    address: Address;
}

export interface Address {
    city: string;
    street: string;
    postcode: string;
    county: string;
}