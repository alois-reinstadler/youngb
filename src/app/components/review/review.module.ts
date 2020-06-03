import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

//firebase
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

//material
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

import { ReviewComponent } from './review.component';

const routes: Routes = [
    { path: 'review', component: ReviewComponent }
];

@NgModule({
    declarations: [ReviewComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),

        //firebase
        AngularFirestoreModule,
        AngularFireStorageModule,

        //material
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
    ]
})

export class ProductModule { }
