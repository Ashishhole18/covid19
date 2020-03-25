import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import {tap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AllcasesService {

  constructor(private http:HttpClient) { }

  getAllCases():Observable<any>
  {
    return this.http.get("https://corona.lmao.ninja/all").pipe(
      tap(cases=>{
        console.log(cases)
      }
      )
    );
  }
  getCoronaNews():Observable<any>
  {
    return this.http.get("https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=574e1f4410f148f9a57188c3ed454cc1").pipe(
      tap(news=>{
        console.log(news)
      }
      )
    );
  }
  getCoronaNewsByCountry():Observable<any>
  {
    return this.http.get("https://corona.lmao.ninja/countries").pipe(
      tap(news=>{
        console.log(news)
      }
      )
    );
  }
  getCoronaNewsCountry(contr):Observable<any>
  {
    return this.http.get("https://corona.lmao.ninja/countries/"+contr).pipe(
      tap(news=>{
        console.log(news)
      }
      )
    );
  }
  getCountryFlag(country):Observable<any>
  {
    return this.http.get("https://restcountries.eu/rest/v2/name/"+country+"?fullText=true").pipe(
      tap(news=>{
        console.log(news)
      }
      )
    );
  }
  
  getIndianFlag():Observable<any>
  {
    return this.http.get("https://restcountries.eu/rest/v2/name/india?fullText=true").pipe(
      tap(news=>{
        console.log(news)
      }
      )
    );
  }
  getCoronaIdiaNewsCountry():Observable<any>
  {
    return this.http.get("https://corona.lmao.ninja/countries/india").pipe(
      tap(news=>{
        console.log(news)
      }
      )
    );
  }
  getStatasticsCountry(cont):Observable<any>
  {
    console.log(cont)
    return this.http.get("https://corona.lmao.ninja/historical/"+cont).pipe(
      tap(countrydata=>{
        console.log(countrydata)
      }
      )
    );
  }
}
