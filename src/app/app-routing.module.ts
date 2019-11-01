import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { SitemapComponent } from './sitemap/sitemap.component';


const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'home', component: HomeComponent },
{ path: 'about', component: AboutComponent },
{ path: 'contact', component:ContactComponent },
{ path: 'blog', component: BlogComponent },
{ path: 'privacy', component: PrivacyComponent },
{ path: 'sitemap', component: SitemapComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
