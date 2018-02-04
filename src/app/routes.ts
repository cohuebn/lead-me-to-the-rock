import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FaithComponent, FinancesComponent, SimpleLivingComponent, RecipesComponent } from './post-categories/post-categories.module';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './posts/post.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'faith', component: FaithComponent },
    { path: 'finances', component: FinancesComponent },
    { path: 'simple-living', component: SimpleLivingComponent },
    { path: 'recipes', component: RecipesComponent },
    { path: 'posts/:key', component: PostComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' }
];