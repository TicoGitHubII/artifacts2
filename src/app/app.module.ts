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
import { MainContentComponent } from './components/main-content/main-content.component';
import { NewsletterFormComponent } from './components/newsletter-form/newsletter-form.component';
import { ArtifactService } from './services/artifact.service';

const routes: Routes = [
  {path: 'home', component: MainContentComponent},
  {path:'', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    ArtifactCardComponent,
    ArtifactCard2Component,
    MainContentComponent,
    NewsletterFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ArtifactService],
  bootstrap: [AppComponent]
})



export class AppModule { }
