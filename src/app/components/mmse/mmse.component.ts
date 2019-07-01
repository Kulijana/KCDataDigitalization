import { Component, OnInit } from '@angular/core';
import { MmseForm } from '../../classes/mmse-form';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router,
    private patientService: PatientService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.patientService.getPatientById(id).subscribe(patient => this.patient = patient);
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
    this.patientService.updatePatient(this.patient);
    this.router.navigateByUrl('/patient-view/' + this.patient.id);
  }
}
