import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { GuestbookComponent } from './guestbook.component';

export const guestbookRoutes: Routes = [
  {
    path: '',
    component: GuestbookComponent,
    data: {
      pageTitle: 'Guestbook'
    }
  }
];

export const guestbookRouting: ModuleWithProviders = RouterModule.forChild(guestbookRoutes);

