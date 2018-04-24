import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { FunWithTextComponent } from './fun-with-text.component';

export const funWithTextRoutes: Routes = [
  {
    path: '',
    component: FunWithTextComponent,
    data: {
      pageTitle: 'FunWithText'
    }
  }
];

export const funWithTextRouting: ModuleWithProviders = RouterModule.forChild(funWithTextRoutes);