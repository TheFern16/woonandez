import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FunWithTextComponent } from './funWithText.component';
import { funWithTextRouting } from './funWithText.routing';

@NgModule({
  imports: [
    CommonModule,
    funWithTextRouting,
    FormsModule
  ],
  declarations: [ FunWithTextComponent ]
})
export class FunWithTextModule {}
