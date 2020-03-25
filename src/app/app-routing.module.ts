import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CountryComponent } from './country/country.component';
import { BycountryComponent } from './bycountry/bycountry.component';
import { SearchcountryComponent } from './searchcountry/searchcountry.component';
import { CovidinfoComponent } from './covidinfo/covidinfo.component';
import { ChartComponent } from './chart/chart.component';


const routes: Routes = [

  {path:'home',component:HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'country/:con',component:CountryComponent},
  {path:'bycountry',component:BycountryComponent},
  {path:'searchcountry/:con',component:SearchcountryComponent},
  {path:'covidinfo',component:CovidinfoComponent},
  {path:'chart/:con',component:ChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[HomeComponent,CountryComponent,BycountryComponent,ChartComponent]
