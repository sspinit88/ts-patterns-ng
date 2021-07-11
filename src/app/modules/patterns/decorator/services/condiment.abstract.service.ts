import { Injectable } from '@angular/core';
import { BeverageAbstractService } from './beverage.abstract.service';

@Injectable({
  providedIn: 'root'
})
export abstract class CondimentAbstractService
  extends BeverageAbstractService {

  protected constructor() {
    super();
  }

  abstract getDescription(): string;
}
