import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { GuestbookComponent } from './guestbook.component';
import { guestbookRouting } from './guestbook.routing';

@NgModule({
  imports: [
    CommonModule,
    guestbookRouting,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ GuestbookComponent ]
})
export class GuestbookModule {}
