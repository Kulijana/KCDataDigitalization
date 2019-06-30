import { Component, OnInit } from '@angular/core';
import { MnaForm } from '../../classes/mna-form';
import { CompletePatient } from '../../classes/complete-patient';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-mna',
  templateUrl: './mna.component.html',
  styleUrls: ['./mna.component.scss']
})
export class MnaComponent implements OnInit {

  patient: CompletePatient;
  mnaForm: MnaForm;

  constructor(
    private route: ActivatedRoute,
    private patientService: PatientService
  ) { }

  ngOnInit() {
    // TODO rewrite how the patient is retrieved from the patientSerivice
    const id = +this.route.snapshot.paramMap.get('id');
    this.patientService.getPatients().subscribe(patients => this.patient = patients.find(p => p.id == id));
    const crud = this.route.snapshot.paramMap.get('crud');
    if (crud == "create") {
      this.mnaForm = new MnaForm();
      this.patient.mnaForm = this.mnaForm;
    }
    else if (crud == "edit") {
      this.mnaForm = this.patient.mnaForm;
    }
  }

}
