import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

//forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//material
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

//components
import { LegalComponent } from './legal.component';

const routes: Routes = [
    { path: '', component: LegalComponent }
];

@NgModule({
    declarations: [
        LegalComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),

        //forms
        FormsModule,
        ReactiveFormsModule,

        //material
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
    ]
})

export class LegalModule { }
