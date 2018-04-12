import { Component, OnInit, Input } from '@angular/core';
import { fact } from 'app/shared';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input('facts') facts: Array<fact>;

  constructor() {}

  ngOnInit() {}

}
