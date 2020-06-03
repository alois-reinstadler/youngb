import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
    selector: 'app-shop',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.scss']
})

export class ShopComponent implements OnInit, OnDestroy {
    margin: number;
    carouselIndex = 0;

    slides: Slide[] = [
        {
            title: 'Nummer 1',
            body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci numquam, ut aliquid reiciendis provident',
            imageUrl: 'https://images.unsplash.com/photo-1422190441165-ec2956dc9ecc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80'
        },
        {
            title: 'Nummer 2',
            body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci numquam, ut aliquid reiciendis provident',
            imageUrl: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjM0MTM2fQ&auto=format&fit=crop&w=1600&q=80'
        },
        {
            title: 'Nummer 3',
            body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci numquam, ut aliquid reiciendis provident',
            imageUrl: 'https://images.unsplash.com/photo-1519327232521-1ea2c736d34d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80'
        },
    ]

    productsRef: AngularFirestoreCollection<Product[]>
    constructor(private route: ActivatedRoute, private afs: AngularFirestore, private storage: AngularFireStorage) {
        
    }

    ngOnInit() {
        this.margin = document.getElementsByTagName('header')[0].offsetHeight;

        this.productsRef = this.afs.collection<Product[]>('products');
    }

    ngOnDestroy() {
        
    }

    imageLoaded(preloader: HTMLElement) {
        preloader.classList.add('fadeout');
        setTimeout(() => {
            preloader.parentNode.removeChild(preloader);
        }, 210);
    }

    stars(n: number) {
        return Array(n);
    }

    prevSlide() {
        if(this.carouselIndex <= 0)
            this.carouselIndex = this.slides.length - 1;
        else
            this.carouselIndex--;
    }

    nextSlide() {
        if(this.carouselIndex + 1 >= this.slides.length)
            this.carouselIndex = 0;
        else
            this.carouselIndex++;
    }
}

export interface Product {
    id: number;
    name: string;
    
    price: number;
    stars: number;

    imageRef: string;
    description: string;
}

interface Slide {
    title: string;
    body: string;
    imageUrl: string;
}