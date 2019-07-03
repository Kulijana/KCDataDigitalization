import { Component, OnInit } from '@angular/core';
import { SppbForm } from '../../classes/sppb-form';
import { CompletePatient } from '../../classes/complete-patient';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-sppb',
  templateUrl: './sppb.component.html',
  styleUrls: ['./sppb.component.scss']
})
export class SppbComponent implements OnInit {

  patient: CompletePatient
  sppbForm: SppbForm;
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
      this.sppbForm = new SppbForm();
    }
    else if (this.crud == "edit") {
      this.sppbForm = this.patient.sppbForm;
    }
  }

  save() {
    if(this.crud == "create"){
      this.patient.sppbForm = this.sppbForm;
    }
    this.patientService.updatePatient(this.patient);
    this.router.navigateByUrl('/patient-view/' + this.patient.id);
  }
}
