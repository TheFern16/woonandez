import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FunWithTextComponent } from './fun-with-text.component';
import { funWithTextRouting } from './fun-with-text.routing';

@NgModule({
  imports: [
    CommonModule,
    funWithTextRouting,
    FormsModule
  ],
  declarations: [ FunWithTextComponent ]
})
export class FunWithTextModule {}
