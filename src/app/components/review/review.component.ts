import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

import { Product } from '../product/product.component';

@Component({
    selector: 'app-review',
    templateUrl: './review.component.html',
    styleUrls: ['./review.component.scss']
})

export class ReviewComponent implements OnInit, OnDestroy {

    productId: number;
    product: Observable<Product[]>;

    constructor(private route: ActivatedRoute, private afs: AngularFirestore, private storage: AngularFireStorage) {
        
    }

    ngOnInit() {
        this.route.params['id'].subscribe(id => this.productId = id);
    }

    ngOnDestroy() {
        console.log(this.productId);
    }
}

export interface Review {
    id: number;
    productId: number;

    stars: number;
    author: string;
    creationDate: Date;
}

