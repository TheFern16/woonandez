import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-fun-with-text',
  templateUrl: './fun-with-text.component.html',
  styleUrls: ['./fun-with-text.component.css']
})
export class FunWithTextComponent implements OnInit {
  inputText: string = '';
  outputText: string = '';

  constructor() {}

  ngOnInit() {}

  submitText(event) {
    console.log(this.outputText, this.inputText);
    console.log(event);
  }

}
