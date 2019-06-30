import { Component, OnInit } from '@angular/core';
import { EqD5Form } from '../../classes/eq-d5-form';
import { ActivatedRoute } from '@angular/router';
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
    private patientService: PatientService
  ) { }

  ngOnInit() {
        // TODO rewrite how the patient is retrieved from the patientSerivice
        const id = +this.route.snapshot.paramMap.get('id');
        this.patientService.getPatients().subscribe(patients => this.patient = patients.find(p => p.id == id));
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
    // TODO actually save...
    console.dir(this.eqD5Form);
  }

}
