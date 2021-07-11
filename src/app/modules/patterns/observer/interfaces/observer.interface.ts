import { Weather } from './weather.interface';

/*
* Каждый потенциальный наблюдатель должен реализовывать интерфуйс Observer.
* Интерфейс содержит единственный метод update(),
* который вызывается при изменении состояния субъекта.
* */
export interface Observer {
  update(updateData: Weather): void;
}
