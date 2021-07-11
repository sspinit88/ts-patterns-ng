import { Observer } from '../interfaces/observer.interface';
import { DisplayElement } from '../interfaces/display-element.interface';
import { Weather } from '../interfaces/weather.interface';
import { Subject } from '../interfaces/subject.interface';

export class CurrentConditionsDisplay
  implements Observer, DisplayElement {

  private subject: Subject;
  private weather: Weather = {
    temperature: undefined,
    pressure: undefined,
    humidity: undefined,
  };


  /*
* конструктору передается объект,
* который используется для регистрации
* элемента в качестве наблюдателя.
* */
  constructor(weatherStation: Subject) {
    this.subject = { ...weatherStation };
    weatherStation.registerObserver(this);
  }

  /*
  * при вызове update() сохраняем переданные значения погоды
  * вызывается только в subject.notifyObserver()
  * */
  update(updateData: Weather): void {
    this.weather = { ...updateData };
  }

  /*
  * выводит значения погоды
  * */
  value(): string {
    return `temperature: ${this.weather.temperature}, pressure: ${this.weather.pressure}, humidity: ${this.weather.humidity}`;
  }

}
