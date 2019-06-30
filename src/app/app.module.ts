import 'reflect-metadata';
import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ElectronService } from './providers/electron.service';

import { WebviewDirective } from './directives/webview.directive';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NewPatientComponent } from './components/new-patient/new-patient.component';
import { SarcFComponent } from './components/sarc-f/sarc-f.component';
import { EqD5Component } from './components/eq-d5/eq-d5.component';
import { MmseComponent } from './components/mmse/mmse.component';
import { GdsSrbComponent } from './components/gds-srb/gds-srb.component';
import { IpaqComponent } from './components/ipaq/ipaq.component';
import { Sf36Component } from './components/sf36/sf36.component';
import { SarQolComponent } from './components/sar-qol/sar-qol.component';
import { SppbComponent } from './components/sppb/sppb.component';
import { MnaComponent } from './components/mna/mna.component';
import { PatientViewComponent } from './components/patient-view/patient-view.component';
import { PatientService } from './services/patient.service';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WebviewDirective,
    NewPatientComponent,
    SarcFComponent,
    EqD5Component,
    MmseComponent,
    GdsSrbComponent,
    IpaqComponent,
    Sf36Component,
    SarQolComponent,
    SppbComponent,
    MnaComponent,
    PatientViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    })
  ],
  providers: [ElectronService, PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
