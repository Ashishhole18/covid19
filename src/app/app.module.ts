import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryComponent } from './country/country.component';
import { BycountryComponent } from './bycountry/bycountry.component';
import { SearchcountryComponent } from './searchcountry/searchcountry.component';
import { CovidinfoComponent } from './covidinfo/covidinfo.component';
import { ChartComponent } from './chart/chart.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    routingComponents,
    CountryComponent,
    BycountryComponent,
    SearchcountryComponent,
    CovidinfoComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
