import { Injectable, OnInit } from '@angular/core';
// import data from '../../assets/data/patients.json';
import { CompletePatient } from '../classes/complete-patient.js';
import { Observable, of } from 'rxjs';
import { Http } from '@angular/http';
import { map } from "rxjs/operators";
import * as fs from 'fs';

// declare function savePatients(patients: CompletePatient[]);

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  //TODO rework the service to use the process.cwd() path, so it works in deployed version as well

  patients: CompletePatient[];
  getPath: string = 'assets/data/patients.json';
  setPath: string = process.cwd() + '/src/assets/data/patients.json';
  // the production version
  // path: String = process.cwd() + '/resources/data/patients.json'

  constructor(
    private http: Http
  ) {
    this.http.get(this.getPath).pipe(map(res => res.json() as CompletePatient[])).subscribe(data => this.patients = data);
    console.log('Patient service Inited');
  }

  public getPatients(): Observable<CompletePatient[]> {
    if (this.patients) {
      console.log("this time patients existed");
      return of(this.patients);
    }
    else {
      console.log("this time patients didnt exist");
      return this.http.get(this.getPath).pipe(map(res => res.json() as CompletePatient[]));
    }
  }

  public savePatients(): void {
    try{
      if(!fs.existsSync(this.setPath)){
        console.log('path didnt exist, being generated');
        fs.mkdirSync(this.setPath);
      }
      fs.writeFileSync(this.setPath, JSON.stringify(this.patients), 'utf-8');
    }
    catch(e){
      alert(e);
    }
  }


  public addPatient(patient: CompletePatient) {
    var id;
    if (this.patients.length != 0) {
      id = this.patients[this.patients.length - 1].id + 1;
    } else {
      id = 1;
    }
    patient.id = id;
    this.patients.push(patient);
    console.dir("we saved the patient, new patients list: " + this.patients);
    this.savePatients();
  }

  public getPatientById(id: number): Observable<CompletePatient> {
    return of(this.patients.find(p => p.id == id));
  }

  public updatePatient(patient: CompletePatient) {
    let index = this.patients.indexOf(patient);
    this.patients[index] = patient;
    this.savePatients();
  }


}
