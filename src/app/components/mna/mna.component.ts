import { Component, OnInit } from '@angular/core';
import { MnaForm } from '../../classes/mna-form';

@Component({
  selector: 'app-mna',
  templateUrl: './mna.component.html',
  styleUrls: ['./mna.component.scss']
})
export class MnaComponent implements OnInit {

  mnaForm: MnaForm = new MnaForm();
  
  constructor() { }

  ngOnInit() {
  }

}
