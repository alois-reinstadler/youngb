
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../animations/animation';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit, OnDestroy {
    routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

    margin: number;
    loaded = false;

    crossfade: any;
    constructor() { }

    ngOnInit(): void {
        this.margin = document.getElementsByTagName('header')[0].offsetHeight;
        this.loaded = true;
        
        let backgroundImages = document.querySelectorAll('div.landing-background-image'),
            index = 0;

        this.crossfade = setInterval(() => {
            backgroundImages[index].classList.toggle('active');
            index++;

            if(index >= backgroundImages.length)
                index = 0;

            backgroundImages[index].classList.toggle('active')
        }, 2500);
    }

    ngOnDestroy() {
        clearInterval(this.crossfade);
    }

    scroll() {
        window.scrollBy(0, window.innerHeight);
    }
}
