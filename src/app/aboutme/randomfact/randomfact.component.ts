import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-randomfact',
  templateUrl: './randomfact.component.html',
  styleUrls: ['./randomfact.component.css']
})
export class RandomfactComponent implements OnInit {
  @Input('fact') fact: { link: string, info: string };
  constructor() { }

  ngOnInit() {
  }

}
