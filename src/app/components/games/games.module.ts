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

import { GamesComponent } from './games.component';
import { HomeComponent } from './components/home/home.component';
import { SnakeComponent } from './components/snake/snake.component';

const routes: Routes = [
    {
        path: '', component: GamesComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'snake', component: SnakeComponent },
        ]
    }
];

@NgModule({
    declarations: [
        GamesComponent,
        HomeComponent,
        SnakeComponent
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

export class GamesModule { }
