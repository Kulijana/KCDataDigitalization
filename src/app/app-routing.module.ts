import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewPatientComponent } from './components/new-patient/new-patient.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'new-patient',
        component: NewPatientComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
