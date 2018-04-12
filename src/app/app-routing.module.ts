import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsComponent } from './projects/projects.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { HomeComponent } from './home/home.component';
import { FunWithTextComponent } from './components/fun-with-text/fun-with-text.component';
import { GuestbookComponent } from './guestbook/guestbook.component';

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
