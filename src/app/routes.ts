import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FaithComponent } from './faith/faith.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'welcome', component: WelcomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'faith', component: FaithComponent },
];