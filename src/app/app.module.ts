import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//routing
import { Routes, RouterModule } from '@angular/router';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';

//forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAnalyticsModule, ScreenTrackingService, CONFIG } from '@angular/fire/analytics';
import { AngularFirePerformanceModule, PerformanceMonitoringService } from '@angular/fire/performance/';
import { environment } from '../environments/environment';

//guard
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToAdmin = () => redirectLoggedInTo(['admin']);

//cookies
import { CookieService } from 'ngx-cookie-service';

//material
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';

//components
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { P404Component } from './components/p404/p404.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: '404', component: P404Component },

    { path: 'shop', loadChildren: () => import('./components/shop/shop.module').then(m => m.ShopModule) },
    { path: 'product', loadChildren: () => import('./components/product/product.module').then(m => m.ProductModule) },

    { path: 'games', loadChildren: () => import('./components/games/games.module').then(m => m.GamesModule) },
    
    { path: 'admin', loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule) },

    { path: 'about', loadChildren: () => import('./components/about/about.module').then(m => m.AboutModule) },
    { path: 'team', loadChildren: () => import('./components/team/team.module').then(m => m.TeamModule) },


    { path: 'legal-notice', loadChildren: () => import('./components/legal/legal.module').then(m => m.LegalModule) },

    {path: '', pathMatch: 'full', redirectTo: '/home'},
    {path: '**', pathMatch: 'full', redirectTo: '/404'}
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        P404Component,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,

        //routing
        QuicklinkModule,
        RouterModule.forRoot(routes, {
            preloadingStrategy: QuicklinkStrategy,
            scrollPositionRestoration: 'top'
        }),

        //forms
        FormsModule,
        ReactiveFormsModule,
        
        //firebase
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule.enablePersistence(),
        AngularFireAnalyticsModule,
        AngularFirePerformanceModule,
        AngularFireStorageModule,

        //material
        MatIconModule,
        MatBadgeModule,
        MatInputModule,
        MatButtonModule,
        MatTooltipModule,
        MatFormFieldModule,
    ],
    providers: [
        //cookies
        CookieService,

        //analytics
        ScreenTrackingService,
        PerformanceMonitoringService,
        {
            provide: CONFIG,
            useValue: {
                allow_ad_personalization_signals: false
            } 
        },
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
