import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../services/skills.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  skills = [];

  constructor(private skillsService: SkillsService) {}

  ngOnInit() {
    this.skills = this.skillsService.skills;
    console.log(this.skills);
  }

}
