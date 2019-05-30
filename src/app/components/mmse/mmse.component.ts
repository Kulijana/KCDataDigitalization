import { Component, OnInit } from '@angular/core';
import { MmseForm } from '../../classes/mmse-form';

@Component({
  selector: 'app-mmse',
  templateUrl: './mmse.component.html',
  styleUrls: ['./mmse.component.scss']
})
export class MmseComponent implements OnInit {

  mmseForm: MmseForm = new MmseForm();

  constructor() { }

  ngOnInit() {
  }

  save(){
    console.dir(this.mmseForm);
  }
}
