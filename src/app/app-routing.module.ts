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

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'new-patient',
        component: NewPatientComponent
    },
    {
        path: 'sarc-f',
        component: SarcFComponent
    },
    {
        path: 'eq-d5',
        component: EqD5Component
    },
    {
        path: 'gds-srb',
        component: GdsSrbComponent
    },
    {
        path: 'sf36',
        component: Sf36Component
    },
    {
        path: 'mmse',
        component: MmseComponent
    },
    {
        path: 'ipaq',
        component: IpaqComponent
    },
    {
        path: 'sar-qol',
        component: SarQolComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
