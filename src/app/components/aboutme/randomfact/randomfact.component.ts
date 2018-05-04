import { Component, OnInit, Input } from '@angular/core';
import { Fact } from 'app/shared';
@Component({
  selector: 'app-randomfact',
  templateUrl: './randomfact.component.html',
  styleUrls: ['./randomfact.component.css']
})
export class RandomFactComponent implements OnInit {
  @Input('fact') fact: Fact;

  constructor() {}

  ngOnInit() {}
}
