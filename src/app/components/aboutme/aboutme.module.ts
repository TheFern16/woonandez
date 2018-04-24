import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './aboutme.component';
import { aboutMeRouting } from './aboutme.routing';

@NgModule({
  imports: [
    CommonModule,
    aboutMeRouting
  ],
  declarations: [ AboutMeComponent ]
})
export class AboutMeModule {}
