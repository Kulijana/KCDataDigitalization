import { Component, OnInit } from '@angular/core';
import { IpaqForm } from '../../classes/ipaq-form';
import { CompletePatient } from '../../classes/complete-patient';
import { ActivatedRoute } from '@angular/router';
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
    private patientService: PatientService
  ) { }

  ngOnInit() {
    // TODO rewrite how the patient is retrieved from the patientSerivice
    const id = +this.route.snapshot.paramMap.get('id');
    this.patientService.getPatients().subscribe(patients => this.patient = patients.find(p => p.id == id));
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
    console.dir(this.ipaqForm);
  }
}
