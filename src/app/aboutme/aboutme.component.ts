import { Component, OnInit } from '@angular/core';
import { SkillsService, FactService, RequestService } from '../services/';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  skills: any = [];
  facts: any = [];
  showModal = false;

  constructor(
    private skillsService: SkillsService,
    private factsService: FactService,
    private requestService: RequestService,
    private http: HttpClient) {}

  ngOnInit() {
    this.requestService.fetchSkills()
      .subscribe(data => {
        // console.log(data);
        this.skills = data;
      });
    // this.http.get('/api/skills')
    //   .subscribe(data => {
    //     console.log(data);
    //     this.skills = data;
    //   });
    this.requestService.fetchFacts()
      .subscribe(data => {
        console.log(data);
        this.facts = data
      });
      // this.skills = this.skillsService.skills;
      // this.facts = this.factsService.facts;
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
