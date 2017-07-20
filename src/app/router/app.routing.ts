import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { AddConceptComponent } from '../add-concept/add-concept.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'addconcept',
    component: AddConceptComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
