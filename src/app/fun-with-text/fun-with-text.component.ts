import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-fun-with-text',
  templateUrl: './fun-with-text.component.html',
  styleUrls: ['./fun-with-text.component.css']
})
export class FunWithTextComponent implements OnInit {
  inputText: any = 'Input Text here.';
  outputText: any = 'Output will go here.';
  invokeFunction: any = 'Add Oxford Commas!';

  constructor(private requestService: RequestService ) {}

  ngOnInit() {}

  setText(event)  {
    this.invokeFunction = event.target.textContent;
  }

  handleRequest() {
    if (this.invokeFunction === 'Add Oxford Commas!') {
      this.addOxfordCommas();
    } else if (this.invokeFunction === 'UPPERCASE!') {
      this.upperCaseText();
    } else if (this.invokeFunction === 'lowercase!') {
      this.lowerCaseText();
    } else if (this.invokeFunction === 'camelCase!') {
      this.camelCaseText();
    }
  }

  addOxfordCommas() {
    this.requestService
      .addOxfordComma(JSON.stringify(this.inputText))
      .subscribe(response => {
          return this.outputText = response;
        }, err => console.log(err));
  }

  upperCaseText() {
    this.requestService
      .upperCaseText(JSON.stringify(this.inputText))
      .subscribe(response => {
        return this.outputText = response;
      }, err => console.log(err));
  }

  lowerCaseText() {
    this.requestService
      .lowerCaseText(JSON.stringify(this.inputText))
      .subscribe(response => {
        return this.outputText = response;
      }, err => console.log(err));
  }

  camelCaseText() {
    this.requestService
      .camelCaseText(JSON.stringify(this.inputText))
      .subscribe(response => {
        return this.outputText = response.slice(1, response.length - 1);
      }, err => console.log(err));
  }

}
