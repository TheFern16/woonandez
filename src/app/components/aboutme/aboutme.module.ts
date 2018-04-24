import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './aboutme.component';
import { TechComponent } from './tech/tech.component';
import { RandomFactComponent } from './randomfact/randomfact.component';
import { ModalComponent } from './modal/modal.component';
import { aboutMeRouting } from './aboutme.routing';

@NgModule({
  imports: [
    CommonModule,
    aboutMeRouting
  ],
  declarations: [ AboutMeComponent, TechComponent, RandomFactComponent, ModalComponent ]
})
export class AboutMeModule {}
