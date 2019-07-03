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
  id: number;
  crud: string;

  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.patientService.getPatientById(this.id).subscribe(patient => this.patient = patient);
    this.crud = this.route.snapshot.paramMap.get('crud');
    if (this.crud == "create") {
      this.sarcFForm = new SarcFForm();
    }
    else if (this.crud == "edit") {
      this.sarcFForm = this.patient.sarcFForm;
    }
  }

  save() {
    if(this.crud == "create"){
      this.patient.sarcFForm = this.sarcFForm;
    }
    this.patientService.updatePatient(this.patient);
    this.router.navigateByUrl('/patient-view/' + this.patient.id);
  }

}
