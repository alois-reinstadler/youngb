import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

//firebase
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

//material
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

import { ShopComponent } from './shop.component';

const routes: Routes = [
    { path: '', component: ShopComponent }
];

@NgModule({
    declarations: [ShopComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),

        //firebase
        AngularFirestoreModule,
        AngularFireStorageModule,

        //material
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
    ]
})

export class ShopModule { }
