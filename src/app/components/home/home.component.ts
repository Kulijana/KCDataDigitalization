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

  gotoNewPatient(){
    this.router.navigateByUrl('/new-patient');
  }

  gotoSarcF(){
    this.router.navigateByUrl('/sarc-f');
  }

  gotoEqD5(){
    this.router.navigateByUrl('/eq-d5');
  }
  
  gotoGdsSrb(){
    this.router.navigateByUrl('/gds-srb');
  }

  gotoSF36(){
    this.router.navigateByUrl('/sf36');
  }

  gotoMmse(){
    this.router.navigateByUrl('/mmse');
  }

  gotoIpaq(){
    this.router.navigateByUrl('/ipaq');
  }

  gotoSarQol(){
    this.router.navigateByUrl('/sar-qol');
  }

  gotoSppb(){
    this.router.navigateByUrl('/sppb');
  }

  gotoMna(){
    this.router.navigateByUrl('/mna')
  }
}
