import { Component } from "@angular/core";


@Component({
  standalone: true,
  selector:'app-counter',
  template:`
  <button (click)="increseBy(1)">+1</button>
  <button (click)="reset()">Reset</button>
  <button (click)="increseBy(-1)">-1</button>
  <h3>{{counter}}</h3>`
})
export class CounterComponent{
  public counter:number=10;

  increseBy(value:number):void{
    this.counter+=value;
  }
  reset():void{
    this.counter=10;
  }
}
