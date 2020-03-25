import { Component, OnInit } from '@angular/core';
import { AllcasesService } from '../allcases.service';
import { Country } from './country';

@Component({
  selector: 'app-bycountry',
  templateUrl: './bycountry.component.html',
  styleUrls: ['./bycountry.component.css']
})
export class BycountryComponent implements OnInit {

  country:Country;
  constructor(private srv:AllcasesService) { 
    this.country=new Country("",0,0,0,0,0,0,0,0);
  }

  ngOnInit() {

    this.srv.getCoronaNewsByCountry().subscribe(
      data=>{
        this.country= data;
        console.log(this.country);
      }


    )
    
  }
  }


