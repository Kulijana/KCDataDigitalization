import { Component, OnInit } from '@angular/core';
import { SarQolForm } from '../../classes/sar-qol-form';
import { CompletePatient } from '../../classes/complete-patient';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-sar-qol',
  templateUrl: './sar-qol.component.html',
  styleUrls: ['./sar-qol.component.scss']
})
export class SarQolComponent implements OnInit {

  patient: CompletePatient
  sarQolForm: SarQolForm;
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
      this.sarQolForm = new SarQolForm();
    }
    else if (this.crud == "edit") {
      this.sarQolForm = this.patient.sarQolForm;
    }
  }

  save() {
    if(this.crud == "create"){
      this.patient.sarQolForm = this.sarQolForm;
    }
    this.patientService.updatePatient(this.patient);
    this.router.navigateByUrl('/patient-view/' + this.patient.id);
  }
}
