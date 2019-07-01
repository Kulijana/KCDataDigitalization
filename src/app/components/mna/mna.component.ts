import { Component, OnInit } from '@angular/core';
import { MnaForm } from '../../classes/mna-form';
import { CompletePatient } from '../../classes/complete-patient';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router,
    private patientService: PatientService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.patientService.getPatientById(id).subscribe(patient => this.patient = patient);
    const crud = this.route.snapshot.paramMap.get('crud');
    if (crud == "create") {
      this.mnaForm = new MnaForm();
      this.patient.mnaForm = this.mnaForm;
    }
    else if (crud == "edit") {
      this.mnaForm = this.patient.mnaForm;
    }
  }

  save() {
    this.patientService.updatePatient(this.patient);
    this.router.navigateByUrl('/patient-view/' + this.patient.id);
  }
}
