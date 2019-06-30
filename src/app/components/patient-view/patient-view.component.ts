import { Component, OnInit } from '@angular/core';
import { CompletePatient } from '../../classes/complete-patient';
import { PatientService } from '../../services/patient.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient-view',
  templateUrl: './patient-view.component.html',
  styleUrls: ['./patient-view.component.scss']
})
export class PatientViewComponent implements OnInit {

  patient: CompletePatient;

  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.patientService.getPatientById(id).subscribe(patient => this.patient = patient);
    // this.patientService.getPatients().subscribe(patients => this.patient = patients.find(p => p.id == id));
  }

}
