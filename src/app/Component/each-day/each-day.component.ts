import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-each-day',
  templateUrl: './each-day.component.html',
  styleUrls: ['./each-day.component.css']
})
export class EachDayComponent implements OnInit {
  @Input()
  Date: any;

  @Input()
  Details: any;

  constructor() { }

  ngOnInit(): void {
  }

  getMathAbs(start:any, end:any) {
    return Math.abs(+start - +end).toFixed(3);
  }

}
