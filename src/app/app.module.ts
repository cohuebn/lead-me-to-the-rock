import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule  } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { routes } from './routes';
import { HeaderComponent } from './header/header.component';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { AboutComponent } from './about/about.component';
import { FaithComponent } from './faith/faith.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PostService } from './posts/post.service';
import { PostPreviewComponent } from './posts/post-preview.component';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, AboutComponent,
    FaithComponent, HomeComponent, WelcomeComponent,
    PostPreviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule {}
