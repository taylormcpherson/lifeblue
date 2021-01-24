import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalHeaderComponent } from './global-header/global-header.component';
import { LandingArticlesComponent } from './landing-articles/landing-articles.component';
import { ArticleContainerComponent } from './article-container/article-container.component';
import { GlobalFooterComponent } from './global-footer/global-footer.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { PopularContentComponent } from './popular-content/popular-content.component';
import { ArchiveComponent } from './archive/archive.component';
import { SecondaryContentComponent } from './secondary-content/secondary-content.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalHeaderComponent,
    LandingArticlesComponent,
    ArticleContainerComponent,
    GlobalFooterComponent,
    NewsletterComponent,
    PopularContentComponent,
    ArchiveComponent,
    SecondaryContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
