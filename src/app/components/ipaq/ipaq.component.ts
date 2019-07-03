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
      this.ipaqForm = new IpaqForm();
    }
    else if (this.crud == "edit") {
      this.ipaqForm = this.patient.ipaqForm;
    }
  }

  save() {
    if(this.crud == "create"){
      this.patient.ipaqForm = this.ipaqForm;
    }
    this.patientService.updatePatient(this.patient);
    this.router.navigateByUrl('/patient-view/' + this.patient.id);
  }
}
