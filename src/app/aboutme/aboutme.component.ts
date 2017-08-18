import { Component, OnInit } from '@angular/core';
import { SkillsService, FactService } from '../services/';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  skills = [];
  facts = [];
  showModal = false;

  constructor(private skillsService: SkillsService, private factsService: FactService) {}

  ngOnInit() {
    this.skills = this.skillsService.skills;
    this.facts = this.factsService.facts;
  }

  getStyle() {
    if (this.showModal === false) {
      return 'none';
    } else {
      return 'block';
    }
  }

  toggleModal(e) {
    e.preventDefault();
    if (e.target.classList.contains('modalWrapper') || e.target.classList.contains('btn')) {
      this.showModal = !this.showModal;
    }
  }

}
