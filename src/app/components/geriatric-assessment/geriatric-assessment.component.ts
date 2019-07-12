import { Component, OnInit } from '@angular/core';
import { GeriatricAssessmentForm } from '../../classes/geriatric-assessment-form';
import { CompletePatient } from '../../classes/complete-patient';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-geriatric-assessment',
  templateUrl: './geriatric-assessment.component.html',
  styleUrls: ['./geriatric-assessment.component.scss']
})
export class GeriatricAssessmentComponent implements OnInit {

  patient: CompletePatient;
  geriatricAssessmentForm: GeriatricAssessmentForm;
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
    if (this.crud == "create") {
      this.geriatricAssessmentForm = new GeriatricAssessmentForm();
    }
    else if (this.crud == "edit") {
      this.geriatricAssessmentForm = this.patient.geriatricAssessmentForm;
    }
  }

  save() {
    if(this.crud == "create"){
      this.patient.geriatricAssessmentForm = this.geriatricAssessmentForm;
    }
    this.patientService.updatePatient(this.patient);
    this.router.navigateByUrl('/patient-view/' + this.patient.id);
  }
}
