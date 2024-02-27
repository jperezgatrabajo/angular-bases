import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-heroes-hero',
  standalone: true,
  imports: [CommonModule], //IMPORTANTÍSIMO
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:string = 'ironman';
  public age: number=45;

  get capitalizedName():string{
    return this.name.toUpperCase();

  }
  getHeroDescription():string{
    return `${this.name}-${this.age}`
  }

  public changeHero():void{
    this.name="Spiderman";
  }
  public changeAge():void{
    this.age=30;
  }
  resetForm():void{
    this.name='ironman';
    this.age=45;
  }

}
