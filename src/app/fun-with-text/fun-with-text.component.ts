import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-fun-with-text',
  templateUrl: './fun-with-text.component.html',
  styleUrls: ['./fun-with-text.component.css']
})
export class FunWithTextComponent implements OnInit {
  inputText: any = '';
  outputText: any = '';
  invokeFunction: any = 'Add Oxford Commas!';

  constructor(private requestService: RequestService ) {}

  ngOnInit() {}

  setText(event)  {
    this.invokeFunction = event.target.textContent;
  }

  handleRequest() {
    console.log(this.invokeFunction, this.inputText);
    if (this.invokeFunction === 'Add Oxford Commas!') {
      this.addOxfordCommas();
    } else if (this.invokeFunction === 'Encrypt Your Text') {
      this.encryptText();
    } else {
      this.decryptText();
    }
  }

  addOxfordCommas() {
    this.requestService.addOxfordComma(JSON.stringify(this.inputText))
      .subscribe(response => {
          this.outputText = response;
        }, err => console.log(err));
  }

  encryptText() {
    this.requestService.encryptText(JSON.stringify(this.inputText))
      .subscribe(response => {
        console.log('encrypt', response);
        this.outputText = response;
      }, err => console.log(err));
  }

  decryptText() {
    this.requestService.decryptText(JSON.stringify(this.inputText))
      .subscribe(response => {
        console.log('decrypt', response);
        this.outputText = response;
      }, err => console.log(err));
  }

}
