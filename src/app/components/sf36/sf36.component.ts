import { Component, OnInit } from '@angular/core';
import { Sf36Form } from '../../classes/sf36-form';
import { CompletePatient } from '../../classes/complete-patient';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-sf36',
  templateUrl: './sf36.component.html',
  styleUrls: ['./sf36.component.scss']
})
export class Sf36Component implements OnInit {

  patient: CompletePatient;
  sf36Form: Sf36Form;
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
    if(this.crud == "create"){
      this.sf36Form = new Sf36Form();
    }
    else if(this.crud == "edit"){
      this.sf36Form = this.patient.sf36Form;
    }
  }

  save(){
    if(this.crud == "create"){
      this.patient.sf36Form = this.sf36Form;
    }
    this.patientService.updatePatient(this.patient);
    this.router.navigateByUrl('/patient-view/' + this.patient.id);
  }
}
