import { Component, OnInit } from '@angular/core';
import { detect as browser} from 'detect-browser';
import { AnimationsService, routeAnimations } from './animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [routeAnimations]
})

export class AppComponent implements OnInit {
    title = 'company';

    mobile = window.innerWidth < 768;
    mobileNav: boolean = false;

    scroll: boolean = false;

    constructor(private animations: AnimationsService) {
        if(!this.isIEorEdgeOrSafari())
            this.animations.updateRouteAnimationType(true, true);
    }

    ngOnInit() {
        window.onresize = () => this.mobile = window.innerWidth < 748;
        window.onscroll = () => this.scroll = window.pageYOffset > -5;
    }


    private isIEorEdgeOrSafari() {
        return ['ie', 'edge', 'safari'].includes(browser().name);
    }
}
