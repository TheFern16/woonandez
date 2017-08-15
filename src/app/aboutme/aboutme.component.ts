import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../services/skills.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  skills = [];
  showModal = false;

  constructor(private skillsService: SkillsService) {}

  ngOnInit() {
    this.skills = this.skillsService.skills;
  }

  getStyle() {
    if (this.showModal === false) {
      return 'none';
    } else {
      return 'block';
    }
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }

}
