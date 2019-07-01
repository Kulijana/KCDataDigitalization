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
      this.sarQolForm = new SarQolForm();
      this.patient.sarQolForm = this.sarQolForm;
    }
    else if (crud == "edit") {
      this.sarQolForm = this.patient.sarQolForm;
    }
  }

  save() {
    this.patientService.updatePatient(this.patient);
    this.router.navigateByUrl('/patient-view/' + this.patient.id);
  }
}
