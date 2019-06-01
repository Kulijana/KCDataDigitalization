import { Component, OnInit } from '@angular/core';
import { SarQolForm } from '../../classes/sar-qol-form';

@Component({
  selector: 'app-sar-qol',
  templateUrl: './sar-qol.component.html',
  styleUrls: ['./sar-qol.component.scss']
})
export class SarQolComponent implements OnInit {

  sarQolForm: SarQolForm = new SarQolForm;

  constructor() { }

  ngOnInit() {
  }

}
