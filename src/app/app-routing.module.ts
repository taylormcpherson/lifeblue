import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlePageComponent } from './article-page/article-page.component';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: 'home', component: LandingPageComponent },
  { path: 'article', component: ArticlePageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
