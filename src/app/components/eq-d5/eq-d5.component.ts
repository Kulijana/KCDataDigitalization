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
          this.eqD5Form = new EqD5Form();
        }
        else if(this.crud == "edit"){
          this.eqD5Form = this.patient.eQD5Form;
        }
  }

  save(){
    if(this.crud == "create"){
      this.patient.eQD5Form = this.eqD5Form;
    }
    this.patientService.updatePatient(this.patient);
    this.router.navigateByUrl('/patient-view/' + this.patient.id);
  }

}
