import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
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
}
