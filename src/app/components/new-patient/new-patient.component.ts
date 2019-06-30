import { Component, OnInit } from '@angular/core';
import { BasicPatient } from '../../classes/basic-patient';
import { PatientService } from '../../services/patient.service';
import { CompletePatient } from '../../classes/complete-patient';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.scss']
})
export class NewPatientComponent implements OnInit {

  patient: BasicPatient;
  completePatient: CompletePatient;
  action: string;
  id: number;

  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit() {
    this.action = this.route.snapshot.paramMap.get('action');
    if (this.action == 'create') {
      this.patient = new BasicPatient();
    } else {
      this.id = +this.route.snapshot.paramMap.get('action');
      this.patientService.getPatientById(this.id).subscribe(patient => this.completePatient = patient);
      this.patient = this.completePatient.basicPatient;
    }
  }

  savePatient() {
    if (this.action == 'create') {
      this.completePatient = new CompletePatient();
      this.completePatient.basicPatient = this.patient;
      this.patientService.addPatient(this.completePatient);
      this.router.navigateByUrl('');
    } else {
      this.patientService.updatePatient(this.completePatient);
      this.router.navigateByUrl('/patient-view/' + this.completePatient.id);
    }
  }
}
