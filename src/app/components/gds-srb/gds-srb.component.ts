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
      this.gdsSrbForm = new GdsSrbForm();
      this.patient.gdsSrbForm = this.gdsSrbForm;
    }
    else if (crud == "edit") {
      this.gdsSrbForm = this.patient.gdsSrbForm;
    }
  }

  save() {
    this.patientService.updatePatient(this.patient);
    this.router.navigateByUrl('/patient-view/' + this.patient.id);
  }
}
