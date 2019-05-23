import { Component, OnInit } from '@angular/core';
import { BasicPatient } from '../../classes/basic-patient';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.scss']
})
export class NewPatientComponent implements OnInit {

  patient: BasicPatient = new BasicPatient();

  constructor() { }


  ngOnInit() {
  }

  savePatient(){
    console.log("number test " + this.patient.number);
    console.log("children test " + this.patient.children);
    console.dir(this.patient);
  }
}
