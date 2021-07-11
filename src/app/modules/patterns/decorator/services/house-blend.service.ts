import { Injectable } from '@angular/core';
import { BeverageAbstractService } from './beverage.abstract.service';

@Injectable({
  providedIn: 'root'
})
export class HouseBlendService
  extends BeverageAbstractService {

  constructor() {
    super();
    super.description = 'HouseBlend';
  }

  cost(): number {
    return 0.89;
  }
}
