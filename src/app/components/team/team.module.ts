import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from './team.component';


const routes: Routes = [
    { path: '', component: TeamComponent }
];

@NgModule({
    declarations: [TeamComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})

export class TeamModule { }
