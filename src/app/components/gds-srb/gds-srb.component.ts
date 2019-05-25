import { Component, OnInit } from '@angular/core';
import { GdsSrbForm } from '../../classes/gds-srb-form';

@Component({
  selector: 'app-gds-srb',
  templateUrl: './gds-srb.component.html',
  styleUrls: ['./gds-srb.component.scss']
})
export class GdsSrbComponent implements OnInit {

  gdsSrbForm: GdsSrbForm = new GdsSrbForm();
  constructor() { }

  ngOnInit() {
  }

  save(){
    console.dir(this.gdsSrbForm);
  }
}
