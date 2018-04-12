import { Component, OnInit, Input } from '@angular/core';
import { fact } from 'app/shared';
@Component({
  selector: 'app-randomfact',
  templateUrl: './randomfact.component.html',
  styleUrls: ['./randomfact.component.css']
})
export class RandomfactComponent implements OnInit {
  @Input('fact') fact: fact;

  constructor() {}

  ngOnInit() {}

}
