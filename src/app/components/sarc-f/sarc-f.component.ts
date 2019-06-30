import { Component, OnInit } from '@angular/core';
import { SarcFForm } from '../../classes/sarc-f-form';
import { PatientService } from '../../services/patient.service';
import { CompletePatient } from '../../classes/complete-patient';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sarc-f',
  templateUrl: './sarc-f.component.html',
  styleUrls: ['./sarc-f.component.scss']
})
export class SarcFComponent implements OnInit {

  patient: CompletePatient;
  sarcFForm: SarcFForm;

  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.patientService.getPatientById(id).subscribe(patient => this.patient = patient);
    const crud = this.route.snapshot.paramMap.get('crud');
    if (crud == "create") {
      this.sarcFForm = new SarcFForm();
      this.patient.sarcFForm = this.sarcFForm;
    }
    else if (crud == "edit") {
      this.sarcFForm = this.patient.sarcFForm;
    }
  }

  save() {
    this.patientService.updatePatient(this.patient);
    this.router.navigateByUrl('/patient-view/' + this.patient.id);
  }

}
