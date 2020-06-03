import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

    constructor() { }

    ngOnInit() {
        document.getElementsByTagName('header')[0].classList.add('persist');
    }

    ngOnDestroy() {
        document.getElementsByTagName('header')[0].classList.remove('persist');
    }
}
