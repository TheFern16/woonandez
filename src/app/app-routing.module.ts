import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const lazyRoutes: Routes = [
  { path: 'aboutMe', loadChildren: './components/aboutme/aboutme.module#AboutMeModule' },
  { path: 'apps', loadChildren: './components/projects/projects.module#ProjectsModule' },
  { path: 'funWithText', loadChildren: './components/funWithText/funWithText.module#FunWithTextModule' },
  { path: 'guestBook', loadChildren: './components/guestbook/guestbook.module#GuestbookModule'},
  { path: 'home', loadChildren: './components/home/home.module#HomeModule' },
  { path: '**', redirectTo: 'home' }
]

@NgModule({
  imports: [ RouterModule.forRoot(lazyRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}





