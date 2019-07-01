import { Component, OnInit } from '@angular/core';
import { EqD5Form } from '../../classes/eq-d5-form';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../../services/patient.service';
import { CompletePatient } from '../../classes/complete-patient';

@Component({
  selector: 'app-eq-d5',
  templateUrl: './eq-d5.component.html',
  styleUrls: ['./eq-d5.component.scss']
})
export class EqD5Component implements OnInit {

  patient: CompletePatient;
  eqD5Form: EqD5Form;

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
          this.eqD5Form = new EqD5Form();
          this.patient.eQD5Form = this.eqD5Form;
        }
        else if(crud == "edit"){
          this.eqD5Form = this.patient.eQD5Form;
        }
  }

  save(){
    this.patientService.updatePatient(this.patient);
    this.router.navigateByUrl('/patient-view/' + this.patient.id);
  }

}
