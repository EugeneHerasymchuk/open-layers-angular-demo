import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RequestFormComponent } from './components/request-form/request-form.component';
import { MapPageComponent } from './pages/map-page/map-page.component';

const routes: Routes = [
  { path: "request-gift", component: RequestFormComponent },
  { path: "home", component: HomeComponent },
  { path: 'map', component: MapPageComponent, pathMatch: 'full' },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
