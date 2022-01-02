export class EachDay{
    open:number
    high:number
    low:number
    close:number
    date:Date
    /**
     *
     */
    constructor(open:number,high:number,low:number,close:number,date:Date) {
       this.open=open;
       this.high=high;
       this.low=low;
       this.close=close;
       this.date=date;
    }

}