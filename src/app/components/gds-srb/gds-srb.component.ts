import { Component, OnInit } from '@angular/core';
import { GdsSrbForm } from '../../classes/gds-srb-form';
import { CompletePatient } from '../../classes/complete-patient';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-gds-srb',
  templateUrl: './gds-srb.component.html',
  styleUrls: ['./gds-srb.component.scss']
})
export class GdsSrbComponent implements OnInit {

  patient: CompletePatient;
  gdsSrbForm: GdsSrbForm;

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
              this.gdsSrbForm = new GdsSrbForm();
              this.patient.gdsSrbForm = this.gdsSrbForm;
            }
            else if(crud == "edit"){
              this.gdsSrbForm = this.patient.gdsSrbForm;
            }
  }

  save(){
    console.dir(this.gdsSrbForm);
  }
}
