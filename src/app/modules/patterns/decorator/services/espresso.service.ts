import { Injectable } from '@angular/core';
import { BeverageAbstractService } from './beverage.abstract.service';

@Injectable({
  providedIn: 'root'
})
export class EspressoService
  extends BeverageAbstractService {
  /*
  * Все классы конкретных напитков расширяют Beverage
  * */

  constructor() {
    super();
    /*
    * Описание (description) задается в конструкторе класса.
    * description наследуется от BeverageAbstractService
    * */
    super.description = 'Espresso';
  }

  cost(): number {
    return 1.99;
  }
}
