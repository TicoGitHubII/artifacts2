import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { ArtifactCardComponent } from './artifact-card/artifact-card.component';
import { ArtifactCard2Component } from './artifact-card2/artifact-card2.component';
import { MainContentComponent } from './main-content/main-content.component';
import { NewsletterComponent } from './newsletter/newsletter.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    ArtifactCardComponent,
    ArtifactCard2Component,
    MainContentComponent,
    NewsletterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
