import { Component, OnInit } from '@angular/core';
import { EqD5Form } from '../../classes/eq-d5-form';

@Component({
  selector: 'app-eq-d5',
  templateUrl: './eq-d5.component.html',
  styleUrls: ['./eq-d5.component.scss']
})
export class EqD5Component implements OnInit {

  eqD5Form: EqD5Form = new EqD5Form();

  constructor() { }

  ngOnInit() {
  }

  save(){
    console.dir(this.eqD5Form);
  }

}
