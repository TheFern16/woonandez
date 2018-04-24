import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestbookComponent } from './guestbook.component';
import { guestbookRouting } from './guestbook.routing';

@NgModule({
  imports: [
    CommonModule,
    guestbookRouting
  ],
  declarations: [ GuestbookComponent ]
})
export class GuestbookModule {}
