import { Component, OnInit } from '@angular/core';
import { SppbForm } from '../../classes/sppb-form';
import { CompletePatient } from '../../classes/complete-patient';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-sppb',
  templateUrl: './sppb.component.html',
  styleUrls: ['./sppb.component.scss']
})
export class SppbComponent implements OnInit {

  patient: CompletePatient
  sppbForm: SppbForm;

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
      this.sppbForm = new SppbForm();
      this.patient.sppbForm = this.sppbForm;
    }
    else if (crud == "edit") {
      this.sppbForm = this.patient.sppbForm;
    }
  }

  save() {
    console.dir(this.sppbForm);
  }
}
