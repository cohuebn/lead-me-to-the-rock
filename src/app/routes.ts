import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FaithComponent } from './faith/faith.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'faith', component: FaithComponent },
];