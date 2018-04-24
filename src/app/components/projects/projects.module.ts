import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { PhotoComponent } from './photo/photo.component';
import { projectsRouting } from './projects.routing';

@NgModule({
  imports: [
    CommonModule,
    projectsRouting
  ],
  declarations: [ ProjectsComponent, PhotoComponent ]
})
export class ProjectsModule {}
