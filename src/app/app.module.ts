import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GymComponent } from './gym/gym.component';
import {FormsModule} from '@angular/forms';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';
import {GymsService} from '../services/gym.service';
import { GymsComponent } from './gyms/gyms.component';
const appRoutes: Routes = [
  {path: '', redirectTo: 'gyms', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'gyms', component: GymsComponent},
  {path: 'gym/:id', component: GymComponent}
];
export const firebaseConfig = {
  apiKey: 'AIzaSyAarsMkjVN4nTldjdmNzm2CsOVX5N1sV-A',
  authDomain: 'liberi-4e329.firebaseapp.com',
  databaseURL: 'https://liberi-4e329.firebaseio.com',
  projectId: 'liberi-4e329',
  storageBucket: 'liberi-4e329.appspot.com',
  messagingSenderId: '708689249064'
};
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GymComponent,
    GymsComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    RouterModule.forRoot(appRoutes),
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [GymsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
