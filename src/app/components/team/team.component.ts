import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.scss']
})

export class TeamComponent implements OnInit {
    margin: number;
    constructor() { }

    ngOnInit(): void {
        this.margin = document.getElementsByTagName('header')[0].offsetHeight;
    }
}
