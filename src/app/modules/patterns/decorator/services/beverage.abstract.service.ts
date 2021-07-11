import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export abstract class BeverageAbstractService {
  description: string = 'Неизвестный напиток';

  protected constructor() {
  }

  getDescription(): string {
    return this.description;
  }

  /*
  * Метод cost() реализуется в субклассах / сервисах.
  *
  * */
  abstract cost(): number;
}
