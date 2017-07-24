import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { AddConceptComponent } from '../add-concept/add-concept.component';
import { ExhaustionComponent } from '../exhaustion/exhaustion.component';
import { HallOfFameComponent } from '../hall-of-fame/hall-of-fame.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'addconcept',
    component: AddConceptComponent
  },
  {
    path: 'exhaustion',
    component: ExhaustionComponent
  },
  {
    path: 'halloffame',
    component: HallOfFameComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
