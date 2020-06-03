import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

//forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//material
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AdminComponent } from './admin.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    {
        path: '', component: AdminComponent,
        children: [
            { path: '', component: HomeComponent },
        ]
    }
];

@NgModule({
    declarations: [
        AdminComponent,
        HomeComponent,
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
        MatSidenavModule,
        MatFormFieldModule,
    ]
})

export class AdminModule { }
