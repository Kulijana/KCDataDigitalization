import { Component, OnInit } from '@angular/core';
import { SarcFForm } from '../../classes/sarc-f-form';

@Component({
  selector: 'app-sarc-f',
  templateUrl: './sarc-f.component.html',
  styleUrls: ['./sarc-f.component.scss']
})
export class SarcFComponent implements OnInit {

  sarcFForm: SarcFForm = new SarcFForm();

  constructor() { }

  ngOnInit() {
  }

  save(){
    console.dir(this.sarcFForm);
  }

}
