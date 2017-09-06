import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsComponent } from './projects/projects.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { HomeComponent } from './home/home.component';
import { FunWithTextComponent } from './fun-with-text/fun-with-text.component';

const appRoutes: Routes = [
  {
    path: 'apps',
    component: ProjectsComponent
  },
  {
    path: 'aboutme',
    component: AboutmeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'funWithText',
    component: FunWithTextComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}