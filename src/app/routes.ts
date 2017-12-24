import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FaithComponent } from './faith/faith.component';

export const routes: Routes = [
    { path: '', redirectTo: 'about', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'faith', component: FaithComponent },
];