import { Component, OnInit } from '@angular/core';
import { Sf36Form } from '../../classes/sf36-form';

@Component({
  selector: 'app-sf36',
  templateUrl: './sf36.component.html',
  styleUrls: ['./sf36.component.scss']
})
export class Sf36Component implements OnInit {

  sf36Form: Sf36Form = new Sf36Form();

  constructor() { }

  ngOnInit() {
  }

}
