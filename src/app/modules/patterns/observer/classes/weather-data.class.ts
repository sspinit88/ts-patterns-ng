import { Subject } from '../interfaces/subject.interface';
import { Observer } from '../interfaces/observer.interface';
import { Weather } from '../interfaces/weather.interface';

// класс субъекта
export class WeatherData
  implements Subject {

  observers: Observer[] = [];
  weather: Weather = {
    temperature: undefined,
    pressure: undefined,
    humidity: undefined,
  };

  registerObserver(o: Observer): void {
    this.observers.push(o);
  }

  removeObserver(o: Observer): void {
    const index: number = this.observers.indexOf(o);

    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObserver(): void {
    // оповещение наблюдателей  об изменении состояния
    this.observers
      .forEach((observer, i) => {
        observer.update(this.weather);
      });
  }

  /*
  * через next() записываем свежие данные
  * */
  next(data: Weather): void {
    this.weather.humidity = data.humidity;
    this.weather.pressure = data.pressure;
    this.weather.temperature = data.temperature;

    this.notifyObserver();
  }

  // другие методы класса...
}
