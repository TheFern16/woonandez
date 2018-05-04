import { Component, OnInit } from '@angular/core';
import { RequestService, Skill, Fact } from 'app/shared';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutMeComponent implements OnInit {
  skills: Array<Skill> = [];
  facts: Array<Fact> = [];
  showModal: boolean = false;

  constructor(private requestService: RequestService) {}

  ngOnInit() {
    this.requestService.gatherFacts()
      .subscribe(data => {
        if (Array.isArray(data)) {
          this.facts = data;
        }
      });
    this.requestService.gatherSkills()
      .subscribe(data => {
        if (Array.isArray(data)) {
          this.skills = data;
        }
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

// function findMatches(wordToMatch, cities) {
//   return cities.filter(place => {

//     const regex = new RegExp(wordToMatch, 'gi');
//     console.log(regex);
//     return place.city.match(regex) || place.state.match(regex);
//   });
// };