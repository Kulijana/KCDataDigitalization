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
      this.sppbForm = new SppbForm();
      this.patient.sppbForm = this.sppbForm;
    }
    else if (crud == "edit") {
      this.sppbForm = this.patient.sppbForm;
    }
  }

  save() {
    this.patientService.updatePatient(this.patient);
    this.router.navigateByUrl('/patient-view/' + this.patient.id);
  }
}
