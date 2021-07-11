import { Component } from '@angular/core';
import { SimplePizzaFactory } from './classes/simple-pizza-factory.class';

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.scss']
})
export class FactoryComponent {

  order: any;

  constructor() {
  }

  getOrder(pizzaType: string): void {
    this.order = new SimplePizzaFactory()
      .createPizza(pizzaType);
  }

}
