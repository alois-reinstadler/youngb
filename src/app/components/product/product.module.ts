import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

//firebase
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

//material
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ProductComponent } from './product.component';

const routes: Routes = [
    { path: ':id', component: ProductComponent }
];

@NgModule({
    declarations: [ProductComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),

        //firebase
        AngularFirestoreModule,
        AngularFireStorageModule,

        //material
        MatIconModule,
        MatButtonModule,
        MatTooltipModule
    ]
})

export class ProductModule { }
