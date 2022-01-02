import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { KeyValue } from '@angular/common'
import { MainServiceService } from '../../Service/main-service.service'

import { EachDay } from '../../Class/EachDay'
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {

  constructor(private MainServiceService: MainServiceService) {
  }
  IBMShares: EachDay[] = [];
  StartIndex = 0;
  EndIndex = 20;


  params = '';
  direction = true;


  bestDaysSort: any
  bestDays: any

  dateFilter: Date | null;

  ngOnInit(): void {
    this.MainServiceService.getIBMShares().subscribe(data => {
      this.IBMShares = data;
      this.maxDifferenceSortDate(true, this.IBMShares);
      this.maxDifferenceWithoutSortDate()
    })
  }
  //navigate function
  forwardPage() {
    this.StartIndex = this.EndIndex;
    if (Object.keys(this.IBMShares).length - 1 < this.EndIndex + 20) {
      this.EndIndex = Object.keys(this.IBMShares).length
    } else {
      this.EndIndex += 20
    }
  }

  backwardsPage() {
    this.EndIndex = this.StartIndex;
    if (this.StartIndex - 20 < 0) {
      this.StartIndex = 0
    } else {
      this.StartIndex -= 20
    }
  }

  //sort
  setSortParm(param: any) {
    if (this.params == param) {
      this.direction = !this.direction
    } else {
      this.params = param;
      this.direction = false;
    }
  }


  //חישוב ימי המכירה בהנחה שהמערך ממוין לפי תאריך
  maxDifferenceSortDate(isSort: boolean, arr: EachDay[]) {
    debugger
    if (isSort == true) {
      this.bestDaysSort = { diff: 0, buy: new Date(), sale: new Date() };
    } else {
      this.bestDays = { diff: 0, buy: new Date(), sale: new Date() };
    }

    for (var i = 0; i < arr.length - 1; i++) {
      if (i < arr.length - 1) {
        for (let index = i + 1; index < arr.length; index++) {
          var DailyProfit: number = arr[i].close - arr[index].close;

          if (isSort == true && this.bestDaysSort.diff < DailyProfit) {
            this.bestDaysSort.diff = DailyProfit;
            this.bestDaysSort.buy = arr[i].date;
            this.bestDaysSort.sale = arr[index].date;
          } else if (isSort == false && this.bestDays.diff < DailyProfit) {
            this.bestDays.diff = DailyProfit;
            this.bestDays.buy = arr[i].date;
            this.bestDays.sale = arr[index].date;
          }
        };
      }
    }
  }
  maxDifferenceWithoutSortDate() {
    let arr = this.IBMShares.map(x => Object.assign({}, x));
    var arrSorted = arr.sort((a, b) => {
      return <any>new Date(a.date) - <any>new Date(b.date);
    });
    
    this.maxDifferenceSortDate(false, arrSorted);
  }

}
