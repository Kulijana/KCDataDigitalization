import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewPatientComponent } from './components/new-patient/new-patient.component';
import { SarcFComponent } from './components/sarc-f/sarc-f.component';
import { EqD5Component } from './components/eq-d5/eq-d5.component';
import { GdsSrbComponent } from './components/gds-srb/gds-srb.component';
import { Sf36Component } from './components/sf36/sf36.component';
import { MmseComponent } from './components/mmse/mmse.component';
import { IpaqComponent } from './components/ipaq/ipaq.component';
import { SarQolComponent } from './components/sar-qol/sar-qol.component';
import { SppbComponent } from './components/sppb/sppb.component';
import { MnaComponent } from './components/mna/mna.component';
import { PatientViewComponent } from './components/patient-view/patient-view.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'patient-view/:id',
        component: PatientViewComponent
    },
    {
        path: 'new-patient/:action',
        component: NewPatientComponent
    },
    {
        path: 'sarc-f/:id/:crud',
        component: SarcFComponent
    },
    {
        path: 'eq-d5/:id/:crud',
        component: EqD5Component
    },
    {
        path: 'gds-srb/:id/:crud',
        component: GdsSrbComponent
    },
    {
        path: 'sf36/:id/:crud',
        component: Sf36Component
    },
    {
        path: 'mmse/:id/:crud',
        component: MmseComponent
    },
    {
        path: 'ipaq/:id/:crud',
        component: IpaqComponent
    },
    {
        path: 'sar-qol/:id/:crud',
        component: SarQolComponent
    },
    {
        path: 'sppb/:id/:crud',
        component: SppbComponent
    },
    {
        path: 'mna/:id/:crud',
        component: MnaComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
