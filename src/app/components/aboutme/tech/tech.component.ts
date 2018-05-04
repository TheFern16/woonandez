import { Component, OnInit, Input } from '@angular/core';
import { Skill } from 'app/shared';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {
  @Input('skill') skill: Skill;

  constructor() {}

  ngOnInit() {}
}
