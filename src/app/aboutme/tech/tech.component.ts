import { Component, OnInit, Input } from '@angular/core';
import { skill } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {
  @Input('skill') skill: skill;

  constructor() {}

  ngOnInit() {}

}
