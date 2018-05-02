import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ApplicationsComponent } from './applications.component';

export const applicationRoutes: Routes = [
  {
    path: '',
    component: ApplicationsComponent,
    data: {
      pageTitle: 'Applications'
    }
  }
];

export const applicationsRouting: ModuleWithProviders = RouterModule.forChild(applicationRoutes);

