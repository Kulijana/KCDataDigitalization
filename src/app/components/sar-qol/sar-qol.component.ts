import { Component, OnInit } from '@angular/core';
import { SarQolForm } from '../../classes/sar-qol-form';
import { CompletePatient } from '../../classes/complete-patient';
import { ActivatedRoute } from '@angular/router';
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
    private patientService: PatientService
  ) { }

  ngOnInit() {
    // TODO rewrite how the patient is retrieved from the patientSerivice
    const id = +this.route.snapshot.paramMap.get('id');
    this.patientService.getPatients().subscribe(patients => this.patient = patients.find(p => p.id == id));
    const crud = this.route.snapshot.paramMap.get('crud');
    if (crud == "create") {
      this.sarQolForm = new SarQolForm();
      this.patient.sarQolForm = this.sarQolForm;
    }
    else if (crud == "edit") {
      this.sarQolForm = this.patient.sarQolForm;
    }
  }

}
