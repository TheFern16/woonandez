import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
// import { HomeComponent } from './components/home/home.component';

// import { AboutmeComponent } from './components/aboutme/aboutme.component';
// import { ModalComponent } from './components/aboutme/modal/modal.component';
// import { RandomfactComponent } from './components/aboutme/randomfact/randomfact.component';
// import { TechComponent } from './components/aboutme/tech/tech.component';
// import { FunWithTextComponent } from './components/fun-with-text/fun-with-text.component';
// import { GuestbookComponent } from './components/guestbook/guestbook.component';

// import { ProjectsComponent } from './components/projects/projects.component';
// import { PhotoComponent } from './components/projects/photo/photo.component';

import { AppRoutingModule } from './app-routing.module';

import { RequestService } from './shared';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
    // HomeComponent,
    // AboutmeComponent,
    // ProjectsComponent,
    // PhotoComponent,
    // TechComponent,
    // RandomfactComponent,
    // GuestbookComponent,
    // FunWithTextComponent,
    // ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [],
  providers: [ RequestService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {}
}
