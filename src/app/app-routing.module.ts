import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './components/map/map.component';
import { GiftComponent } from './components/gift/gift.component';
import { HomeComponent } from './components/home/home.component';
import { MapPageComponent } from './pages/map-page/map-page.component';

const routes: Routes = [
  { path: "request-gift", component: GiftComponent },
  { path: "home", component: HomeComponent },
  { path: 'map', component: MapPageComponent, pathMatch: 'full' },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
