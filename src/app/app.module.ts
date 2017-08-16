import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ProjectsComponent } from './projects/projects.component';
import { PhotoComponent } from './projects/photo/photo.component';
import { TechComponent } from './aboutme/tech/tech.component';

import { AppRoutingModule } from './app-routing.module';

import { StateService } from './services/state.service';
import { SkillsService } from './services/skills.service';
import { FunService } from './services/fun.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutmeComponent,
    ProjectsComponent,
    PhotoComponent,
    TechComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [],
  providers: [ StateService, SkillsService, FunService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {}
}
