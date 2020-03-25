import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js'
import { AllcasesService } from '../allcases.service';
import { CountryData } from '../searchcountry/countrydata';
import { Timeline } from './timeline';
import { countryDataInfo } from './countryDataInfo';
import { ChartCase } from './chartCase';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  LineChart:any=[];
  conData:countryDataInfo;
  timeline:Timeline;
  cases:any=[];
  cases1:any=[];
  cases2:any=[];
  casesD:any=[];
  casesD1:any=[];
  casesD2:any=[];
  count:number=0;
  case1=[]
  name:string="";

  caseChart:ChartCase[];
  caseChart1:ChartCase[];
  caseChart2:ChartCase[];

  constructor(private srv:AllcasesService,private route:ActivatedRoute) {
    


   }

  ngOnInit() {
    this.name=this.route.snapshot.paramMap.get('con');
    console.log("hello"+this.name);

    this.srv.getStatasticsCountry(this.name).subscribe(
      data=>{
        this.conData= data;
        console.log(this.conData);
        console.log(this.conData['standardizedCountryName']);
        console.log(this.conData['timeline']['cases']);
        console.log(this.conData['timeline']['deaths']);
        this.caseChart=this.conData['timeline']['cases'];
        this.caseChart1=this.conData['timeline']['deaths'];
        this.caseChart2=this.conData['timeline']['recovered'];
        console.log("hello"+this.caseChart);
        console.log("h1"+this.caseChart1);

        for (let key in this.caseChart) {
          
          this.cases.push(key.toString());
          this.casesD.push(this.caseChart[key]);     
      }
      for (let key in this.caseChart1) {
        console.log(key);
        console.log(this.caseChart1[key])
        this.cases1.push(key.toString());
        this.casesD1.push(this.caseChart1[key]);     
    }
    for (let key in this.caseChart2) {
      console.log(key);
      console.log(this.caseChart2[key])
      this.cases2.push(key.toString());
      this.casesD2.push(this.caseChart2[key]);     
  }

      
      this.LineChart = new Chart('lineChart', {
        type: 'line',
      data: {
       labels: this.cases,
       datasets: [{
           label: 'Number of cases',
           
           data: this.casesD,
           fill:true,
           lineTension:0.2,
           borderColor:"yellow",
           borderWidth: 1
       }]
      }, 
      options: {
       title:{
           text:"Line Chart",
           display:true
       },
       scales: {
           yAxes: [{
               ticks: {
                 
                   beginAtZero:true
               }
           }]
       }
      }
      });
      

      this.LineChart = new Chart('lineChart1', {
        type: 'line',
      data: {
       labels: this.cases1,
       datasets: [{
           label: 'Number of deaths',
           
           data: this.casesD1,
           fill:true,
           lineTension:0.2,
           borderColor:"red",
           borderWidth: 1
       }]
      }, 
      options: {
       title:{
           text:"Line Chart",
           display:true
       },
       scales: {
           yAxes: [{
               ticks: {
                   beginAtZero:true
               }
           }]
       }
      }
      });
      
      this.LineChart = new Chart('lineChart2', {
        type: 'line',
      data: {
       labels: this.cases2,
       datasets: [{
           label: 'Number of cases recovered',
           data: this.casesD2,
           
           fill:true,
           lineTension:0.2,
           borderColor:"green",
           borderWidth: 1
       }]
      }, 
      options: {
       title:{
           text:"Line Chart",
            
           display:true
       },
       scales: {
           yAxes: [{
             
               ticks: {
              
                   beginAtZero:true
               }
           }]
       }
      }
      });


      
      
      console.log(this.cases[0]);
      console.log(this.cases[1]);

      }

      


    )
    

    
  }

}
