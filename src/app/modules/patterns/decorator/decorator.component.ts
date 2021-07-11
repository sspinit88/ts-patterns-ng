import { Component, OnInit } from '@angular/core';
import { Beverage } from './classes/beverage.abstract.class';
import { Espresso } from './classes/espresso.class';
import { Mocha } from './classes/mocha.class';

@Component({
  selector: 'app-decorator',
  templateUrl: './decorator.component.html',
  styleUrls: ['./decorator.component.scss']
})
export class DecoratorComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    const beverage: Beverage = new Espresso();
    const m = new Mocha(beverage);
    console.log('beverage.description():', beverage.description);
    console.log('m.description():', m.getDescription());
    console.log('m.cost()():', m.cost());
  }


}
