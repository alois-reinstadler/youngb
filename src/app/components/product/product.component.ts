import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit, OnDestroy {

    productId: number;
    product: Product;

    imageUrl: Observable<string | null>;
    productsRef: AngularFirestoreCollection<Product[]>

    constructor(private route: ActivatedRoute, private afs: AngularFirestore, private storage: AngularFireStorage) {
        
    }

    ngOnInit() {
    //     this.route.params['id'].subscribe(id => {
    //         //get product id
    //         this.productId = id;

    //         //debug
    //         this.productId = 1;

    //         this.afs.collection('products').ref.where('id', '==', (this.productId + '')).get().then(value => console.log(value));
    //     });

        // this.productId = id;

        //debug
        this.productId = 1;

        this.productsRef = this.afs.collection<Product[]>('products');
        this.productsRef.ref.where('id', '==', (this.productId + '')).get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                this.product = doc.data() as Product;
                // this.product.stars = Math.round(this.product.stars);

                this.imageUrl = this.storage.ref(this.product.imageRef).getDownloadURL();
            });
        })
    }

    ngOnDestroy() {
        console.log(this.productId);
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

    getShareableLink(site, link = window.location.href) {
        switch(site) {
            case 'facebook':
                return 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(link);

                break;
            
                
            case 'twitter':
                return 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(link);
                break;
            
                
            case 'whatsapp':
                return 'https://wa.me/whatsappphonenumber/?text=' + encodeURIComponent(link);
                break;

            default:
                return;
        }
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