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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private patientService: PatientService
  ) { }



  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.patientService.getPatientById(id).subscribe(patient => this.patient = patient);
    const crud = this.route.snapshot.paramMap.get('crud');
    if(crud == "create"){
      this.sf36Form = new Sf36Form();
      this.patient.sf36Form = this.sf36Form;
    }
    else if(crud == "edit"){
      this.sf36Form = this.patient.sf36Form;
    }
  }

  save(){
    this.patientService.updatePatient(this.patient);
    this.router.navigateByUrl('/patient-view/' + this.patient.id);
  }
}
