import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './map/map.component';
import { GiftComponent } from './components/gift/gift.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: "request-gift", component: GiftComponent },
  { path: "home", component: HomeComponent },
  { path: 'map', component: MapComponent, pathMatch: 'full' },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
