import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMePageComponent } from './components/about-me-page/about-me-page.component';
import { CareerPageComponent } from './components/career-page/career-page.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ProjectsPageComponent } from './components/projects-page/projects-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'About Me', component: AboutMePageComponent},
  { path: 'Career', component: CareerPageComponent},
  { path: 'Projects', component: ProjectsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
