import { Routes } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactusComponent } from '../components/contactus/contactus.component';
import { ComplaintsComponent } from '../complaints/complaints.component';
import { CompformComponent } from '../components/compform/compform.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'complaint', component: ComplaintsComponent },
    { path: 'cform' , component: CompformComponent },
    { path: 'contactus', component: ContactusComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
