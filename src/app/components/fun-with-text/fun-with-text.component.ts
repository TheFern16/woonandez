import { Component, OnInit } from '@angular/core';
import { RequestService } from 'app/shared';

@Component({
  selector: 'app-fun-with-text',
  templateUrl: './fun-with-text.component.html',
  styleUrls: ['./fun-with-text.component.css']
})
export class FunWithTextComponent implements OnInit {
  inputText: any = 'Input Text here.';
  outputText: any = 'Output will go here.';

  constructor(private requestService: RequestService) {}

  ngOnInit() {}

  addOxfordCommas() {
    this.requestService.addOxfordComma(JSON.stringify(this.inputText))
      .subscribe(response => {
          return this.outputText = response;
        }, err => console.log(err));
  }

  upperCaseText() {
    this.requestService.upperCaseText(JSON.stringify(this.inputText))
      .subscribe(response => {
        return this.outputText = response;
      }, err => console.log(err));
  }

  lowerCaseText() {
    this.requestService.lowerCaseText(JSON.stringify(this.inputText))
      .subscribe(response => {
        return this.outputText = response;
      }, err => console.log(err));
  }

  camelCaseText() {
    this.requestService.camelCaseText(JSON.stringify(this.inputText))
      .subscribe(response => {
        return this.outputText = response;
      }, err => console.log(err));
  }

  altCaseText() {
    this.requestService.altCaseText(JSON.stringify(this.inputText))
      .subscribe(response => {
        return this.outputText = response;
      }, err => console.log(err));
  }

}
