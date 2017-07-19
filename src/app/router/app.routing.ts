import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from '../landing-page/landing-page.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
