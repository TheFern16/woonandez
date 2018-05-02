import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationsComponent } from './applications.component';
import { PhotoComponent } from './photo/photo.component';
import { applicationsRouting } from './applications.routing';

@NgModule({
  imports: [
    CommonModule,
    applicationsRouting
  ],
  declarations: [ ApplicationsComponent, PhotoComponent ]
})
export class ApplicationsModule {}
