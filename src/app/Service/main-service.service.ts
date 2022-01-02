import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, pipe } from 'rxjs';
import { map } from 'rxjs/operators'
import { Observable, Subject } from 'rxjs';

import { EachDay } from '../Class/EachDay'
@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
  private IBMUrl = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&apikey=demo';
  constructor(private http: HttpClient) { }

  getIBMShares(): Observable<EachDay[]> {
    return this.http.get<any>(this.IBMUrl).pipe(map(responseData => {
      const IBMShares: EachDay[] = [];
      var helpArr=responseData["Time Series (Daily)"]
      for (const key of Object.keys(helpArr)) {
        var temp: any = helpArr[key];
        // console.log(firstKey);
        var a = new EachDay(+temp["1. open"], +temp["2. high"], +temp["3. low"], +temp["4. close"], new Date(key))
        IBMShares.push(a);
      }
      // return responseData["Time Series (Daily)"]
      return IBMShares;
    }))
  }
}
