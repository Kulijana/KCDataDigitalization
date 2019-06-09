import { Component, OnInit } from '@angular/core';
import { SppbForm } from '../../classes/sppb-form';

@Component({
  selector: 'app-sppb',
  templateUrl: './sppb.component.html',
  styleUrls: ['./sppb.component.scss']
})
export class SppbComponent implements OnInit {

  sppbForm: SppbForm = new SppbForm();

  constructor() { }

  ngOnInit() {
  }

  save(){
    console.dir(this.sppbForm);
  }
}
