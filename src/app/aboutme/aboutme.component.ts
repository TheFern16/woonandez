import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  skills: any = [];
  facts: any = [];
  showModal: boolean = false;

  constructor(private requestService: RequestService) {}

  ngOnInit() {

    this.requestService.gatherFacts()
      .subscribe(data => {
        this.facts = data;
      });
    this.requestService.gatherSkills()
      .subscribe(data => {
        this.skills = data;
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
