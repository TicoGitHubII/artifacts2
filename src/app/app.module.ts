import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{ HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { ArtifactCardComponent } from './components/artifact-card/artifact-card.component';
import { ArtifactCard2Component } from './components/artifact-card2/artifact-card2.component';
import { ArtifactsComponent } from './components/artifacts/artifacts.component';
import { NewsletterFormComponent } from './components/newsletter-form/newsletter-form.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';

import { ArtifactService } from './services/artifact.service';
import{BreadcrumbService} from './services/breadcrumb.service';
import { HomeComponent } from './components/home/home.component'


const routes: Routes = [
  
  { path: 'home', component: HomeComponent, data: {breadcrumb: 'Home'}}, 
   {path:'artifacts', component: ArtifactsComponent, data: {breadcrumb: 'Artifacts'}},
 {path:'', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    ArtifactCardComponent,
    ArtifactCard2Component,
    ArtifactsComponent,
    NewsletterFormComponent,
    BreadcrumbComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [ArtifactService, BreadcrumbService],
  bootstrap: [AppComponent]
})



export class AppModule { }
