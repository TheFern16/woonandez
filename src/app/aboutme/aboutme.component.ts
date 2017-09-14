import { Component, OnInit } from '@angular/core';
// import { SkillsService, FactService, RequestService } from '../services/';
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
    // private skillsService: SkillsService,
    // private factsService: FactService,
    // private requestService: RequestService,
    private http: HttpClient) {}

  ngOnInit() {
    this.http.get('/api/skills')
      .subscribe(data => {
        this.skills = data;
      });

    this.http.get('/api/facts')
      .subscribe(data => {
        this.facts = data;
      });
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
