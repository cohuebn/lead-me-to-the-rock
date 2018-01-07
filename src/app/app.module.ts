import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

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
import { PostComponent } from './posts/post.component';
import { PostModelFactory } from './posts/post-model.factory';
import { FirebaseUrlProvider } from './content/firebase-url.provider';
import { FirebaseContentProvider } from './content/firebase-content.provider';
import { SafeHtmlPipe } from './content/safe-html.pipe';
import { FirebaseSourceTransformer } from './content/firebase-source.transformer';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, AboutComponent,
    FaithComponent, HomeComponent, WelcomeComponent,
    PostPreviewComponent, PostComponent, SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [
    PostService, PostModelFactory, FirebaseUrlProvider,
    FirebaseContentProvider, FirebaseSourceTransformer
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}