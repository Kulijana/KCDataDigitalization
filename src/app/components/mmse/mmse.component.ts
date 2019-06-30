import { Component, OnInit } from '@angular/core';
import { MmseForm } from '../../classes/mmse-form';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../../services/patient.service';
import { CompletePatient } from '../../classes/complete-patient';

@Component({
  selector: 'app-mmse',
  templateUrl: './mmse.component.html',
  styleUrls: ['./mmse.component.scss']
})
export class MmseComponent implements OnInit {

  patient: CompletePatient;
  mmseForm: MmseForm;

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
      this.mmseForm = new MmseForm();
      this.patient.mmseForm = this.mmseForm;
    }
    else if (crud == "edit") {
      this.mmseForm = this.patient.mmseForm;
    }
  }

  save() {
    // TODO actually save...
    console.dir(this.mmseForm);
  }
}
