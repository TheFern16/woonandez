import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AboutMeComponent } from './aboutme.component';

export const aboutMeRoutes: Routes = [
  {
    path: '',
    component: AboutMeComponent,
    data: {
      pageTitle: 'AboutMe'
    }
  }
];

export const aboutMeRouting: ModuleWithProviders = RouterModule.forChild(aboutMeRoutes);

