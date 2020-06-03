import { Component, OnInit, OnDestroy } from '@angular/core';
import { routeAnimations } from 'src/app/animations';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss'],
    animations: [routeAnimations]
})

export class AdminComponent implements OnInit, OnDestroy {

    hide = true;
    constructor() { }

    ngOnInit() {
        document.body.classList.add('admin');
    }

    ngOnDestroy() {
        document.body.classList.remove('admin');
    }
}
