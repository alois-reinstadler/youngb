import { Component, OnInit } from '@angular/core';
import { routeAnimations } from 'src/app/animations';

@Component({
    selector: 'app-games',
    templateUrl: './games.component.html',
    styleUrls: ['./games.component.scss'],
    animations: [routeAnimations]
})

export class GamesComponent implements OnInit {

    hide = true;
    constructor() { }

    ngOnInit(): void {
        
    }
}
