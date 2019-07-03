import { Component, OnInit } from '@angular/core';
import { GdsSrbForm } from '../../classes/gds-srb-form';
import { CompletePatient } from '../../classes/complete-patient';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-gds-srb',
  templateUrl: './gds-srb.component.html',
  styleUrls: ['./gds-srb.component.scss']
})
export class GdsSrbComponent implements OnInit {

  patient: CompletePatient;
  gdsSrbForm: GdsSrbForm;
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
      this.gdsSrbForm = new GdsSrbForm();
    }
    else if (this.crud == "edit") {
      this.gdsSrbForm = this.patient.gdsSrbForm;
    }
  }

  save() {
    if(this.crud == "create"){
      this.patient.gdsSrbForm = this.gdsSrbForm;
    }
    this.patientService.updatePatient(this.patient);
    this.router.navigateByUrl('/patient-view/' + this.patient.id);
  }
}
