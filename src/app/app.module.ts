import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './routes';
import { HeaderComponent } from './header/header.component';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { AboutComponent } from './about/about.component';
import { FaithComponent } from './faith/faith.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, AboutComponent,
    FaithComponent, HomeComponent, WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
