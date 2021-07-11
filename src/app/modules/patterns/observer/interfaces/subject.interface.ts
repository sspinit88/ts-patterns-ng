import { Observer } from './observer.interface';

/*
* Интерфейс субъекта используется объектами для регистрации в качестве наблюдателя, а также исключения из списка
* */
export interface Subject {
  observers: any[];

  registerObserver(o: Observer): void;

  removeObserver(o: Observer): void;

  notifyObserver(): void;
}
