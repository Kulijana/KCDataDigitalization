import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewPatientComponent } from './components/new-patient/new-patient.component';
import { SarcFComponent } from './components/sarc-f/sarc-f.component';

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
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
