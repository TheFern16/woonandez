import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { FunWithTextComponent } from './components/fun-with-text/fun-with-text.component';
import { GuestbookComponent } from './components/guestbook/guestbook.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './projects/projects.component';

const appRoutes: Routes = [
  { path: 'apps', component: ProjectsComponent },
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'funWithText', component: FunWithTextComponent },
  { path: 'guestbook', component: GuestbookComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
