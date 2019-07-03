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
      this.mnaForm = new MnaForm();
    }
    else if (this.crud == "edit") {
      this.mnaForm = this.patient.mnaForm;
    }
  }

  save() {
    if(this.crud == "create"){
      this.patient.mnaForm = this.mnaForm;
    }
    this.patientService.updatePatient(this.patient);
    this.router.navigateByUrl('/patient-view/' + this.patient.id);
  }
}
