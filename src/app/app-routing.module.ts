import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { AboutmeComponent } from './components/aboutme/aboutme.component';
// import { FunWithTextComponent } from './components/fun-with-text/fun-with-text.component';
// import { GuestbookComponent } from './components/guestbook/guestbook.component';
// import { HomeComponent } from './components/home/home.component';
// import { ProjectsComponent } from './components/projects/projects.component';

// const appRoutes: Routes = [
//   { path: 'apps', component: ProjectsComponent },
//   { path: 'aboutme', component: AboutmeComponent },
//   { path: 'home', component: HomeComponent },
//   { path: 'funWithText', component: FunWithTextComponent },
//   { path: 'guestBook', component: GuestbookComponent },
//   { path: '', redirectTo: '/home', pathMatch: 'full' },
//   { path: '**', component: HomeComponent }
// ]

const lazyRoutes: Routes = [
  { path: 'aboutMe', loadChildren: './components/aboutme/aboutme.module#AboutMeModule' },
  { path: 'apps', loadChildren: './components/projects/projects.module#ProjectsModule' },
  { path: 'funWithText', loadChildren: './components/fun-with-text/fun-with-text.module#FunWithTextModule' },
  { path: 'guestBook', loadChildren: './components/guestbook/guestbook.module#GuestbookModule'},
  { path: 'home', loadChildren: './components/home/home.module#HomeModule' },
  { path: '**', redirectTo: 'home' }
]

@NgModule({
  imports: [ RouterModule.forRoot(lazyRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}





