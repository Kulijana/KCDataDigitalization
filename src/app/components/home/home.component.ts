import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PatientService } from '../../services/patient.service';
import { CompletePatient } from '../../classes/complete-patient';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  patients: CompletePatient[];

  constructor(
    private router: Router,
    private patientService: PatientService
    ) { }

  ngOnInit() {
    this.patientService.getPatients().subscribe(data => this.patients = data);
  }

  public isComplete(patient: CompletePatient): boolean{
    if(patient.eQD5Form != null && patient.gdsSrbForm != null && patient.ipaqForm != null && patient.mmseForm !=null 
      && patient.mnaForm != null && patient.sarQolForm != null && patient.sarcFForm != null 
      && patient.sf36Form != null && patient.sppbForm != null && patient.geriatricAssessmentForm !=null)
        return true;
    return false;
}
}
