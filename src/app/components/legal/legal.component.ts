import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-legal',
    templateUrl: './legal.component.html',
    styleUrls: ['./legal.component.scss']
})

export class LegalComponent implements OnInit, OnDestroy {
    loaded: boolean = false;

    ngOnInit() {
        setTimeout(() => {this.loaded = true;}, 500);
    }

    ngOnDestroy() {
        this.loaded = false;
    }
}