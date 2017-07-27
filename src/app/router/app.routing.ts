import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { AddConceptComponent } from '../add-concept/add-concept.component';
import { ExhaustionComponent } from '../exhaustion/exhaustion.component';
import { HallOfFameComponent } from '../hall-of-fame/hall-of-fame.component';
import { HallOfFameDetailComponent } from '../hall-of-fame-detail/hall-of-fame-detail.component';
import { AboutComponent } from '../about/about.component';
import { MetaphorsComponent } from '../metaphors/metaphors.component';
import { AuthGuardService } from '../services/auth-guard.service';

const appRoutes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'addconcept',
    component: AddConceptComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'exhaustion',
    component: ExhaustionComponent
  },
  {
    path: 'halloffame',
    component: HallOfFameComponent
  },
  {
    path: 'viewdetail/:key',
    component: HallOfFameDetailComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'metaphors',
    component: MetaphorsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
