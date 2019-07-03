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
  id: number;
  crud: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private patientService: PatientService
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.patientService.getPatientById(this.id).subscribe(patient => this.patient = patient);
    this.crud = this.route.snapshot.paramMap.get('crud');
    if (this.crud == "create") {
      this.mmseForm = new MmseForm();
    }
    else if (this.crud == "edit") {
      this.mmseForm = this.patient.mmseForm;
    }
  }

  save() {
    if(this.crud == "create"){
      this.patient.mmseForm = this.mmseForm;
    }
    this.patientService.updatePatient(this.patient);
    this.router.navigateByUrl('/patient-view/' + this.patient.id);
  }
}
