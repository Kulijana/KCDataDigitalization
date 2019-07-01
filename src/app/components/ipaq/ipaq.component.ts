import { Component, OnInit } from '@angular/core';
import { IpaqForm } from '../../classes/ipaq-form';
import { CompletePatient } from '../../classes/complete-patient';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-ipaq',
  templateUrl: './ipaq.component.html',
  styleUrls: ['./ipaq.component.scss']
})
export class IpaqComponent implements OnInit {

  patient: CompletePatient;
  ipaqForm: IpaqForm;

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
      this.ipaqForm = new IpaqForm();
      this.patient.ipaqForm = this.ipaqForm;
    }
    else if (crud == "edit") {
      this.ipaqForm = this.patient.ipaqForm;
    }
  }

  save() {
    this.patientService.updatePatient(this.patient);
    this.router.navigateByUrl('/patient-view/' + this.patient.id);
  }
}
