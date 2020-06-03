import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-p404',
    templateUrl: './p404.component.html',
    styleUrls: ['./p404.component.scss'],
})

export class P404Component implements OnInit {
    routeAnimationsElements = 'route-animation-element';

    margin: number;
    constructor() { }

    ngOnInit(): void {
        this.margin = document.getElementsByTagName('header')[0].offsetHeight;
    }
}
