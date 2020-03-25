import { Component, OnInit } from '@angular/core';
import { AllcasesService } from '../allcases.service';
import { All } from './all';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { count } from 'rxjs/operators';
import { CoronsNews } from './coronanews';
import { Router } from '@angular/router';
import { Country } from '../bycountry/country';
import { CountryData } from '../searchcountry/countrydata';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 alls:All;
 dated:any;
 
 count1:any;
 count:any=0;
 news:any;
 search:string="";
 condata:any;
 actnews:CoronsNews[];
 country:Country;
  flag:CountryData;
  constructor(private serv:AllcasesService,private route:Router) {
    this.alls=new All(0,0,0,0);
    this.country=new Country("",0,0,0,0,0,0,0,0);
    this.flag=new CountryData("","");
    
    
   }

  ngOnInit() {

    this.count=sessionStorage.getItem('count');
    
    if(this.count==0)
    {
      console.log(this.count);
      this.count++;
    sessionStorage.setItem('count',this.count);
    
    console.log(this.count);
    }
    else{
      console.log(this.count);
      this.count=sessionStorage.getItem('count');
      this.count++;
    sessionStorage.setItem('count',this.count);
    this.count1=sessionStorage.getItem('count');
    console.log(this.count1);

    }
    
    this.serv.getAllCases().subscribe(
      prdo=>{
        this.alls= prdo;
        console.log(this.alls);
        console.log(this.alls.updated);
        this.dated=new Date(this.alls.updated);
        sessionStorage.setItem('dated',this.dated);
      }
    )
    console.log(this.dated);
    this.serv.getCoronaNews().subscribe(
      data=>{
        this.news= data;
        this.actnews=this.news['articles'];
        console.log(this.news);
        console.log(this.actnews);
      }
    )
    this.serv.getCoronaIdiaNewsCountry().subscribe(
      data=>{
        this.country= data;
        console.log(this.country);
      }
    )
    this.serv.getIndianFlag().subscribe(
      data=>{
        this.condata= data;
        this.flag.name=this.condata[0]['name'];
        this.flag.flag=this.condata[0]['flag'];
        console.log(this.flag.name);
        console.log(this.flag.flag);
        console.log(this.condata);
      }
    )
  }
  getCountry()
  {
    console.log(this.search);
    this.route.navigate(['/searchcountry',this.search]);
    
  }

}
