import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ProjectsComponent } from './projects.component';

export const projectRoutes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    data: {
      pageTitle: 'Projects'
    }
  }
];

export const projectsRouting: ModuleWithProviders = RouterModule.forChild(projectRoutes);

