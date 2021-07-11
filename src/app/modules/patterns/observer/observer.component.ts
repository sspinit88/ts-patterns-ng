import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WeatherData } from './classes/weather-data.class';
import { CurrentConditionsDisplay } from './classes/current-сonditions-display.class';

@Component({
  selector: 'app-observer',
  templateUrl: './observer.component.html',
  styleUrls: ['./observer.component.scss']
})
export class ObserverComponent {

  form: FormGroup;
  isReady: boolean;

  subject: WeatherData;

  observer1: CurrentConditionsDisplay;
  observer2: CurrentConditionsDisplay;
  observer3: CurrentConditionsDisplay;

  constructor(
    private fb: FormBuilder,
  ) {
    this.isReady = false;
    this.createSubject();
    this.createObservers();
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb
      .group({
        temperature: [null],
        pressure: [null],
        humidity: [null],
      });

    this.isReady = true;
  }

  createSubject(): void {
    this.subject = new WeatherData();
  }

  createObservers(): void {
    this.observer1 = new CurrentConditionsDisplay(this.subject);
    this.observer2 = new CurrentConditionsDisplay(this.subject);
    this.observer3 = new CurrentConditionsDisplay(this.subject);
  }

  update(): void {
    const value = this.form.value;
    this.subject.next(value);
  }

  display(observerNum: number): void {
    if (observerNum === 1) {
      alert(`Н1: ${this.observer1.value()}`);
    }

    if (observerNum === 2) {
      alert(`Н2: ${this.observer2.value()}`);
    }

    if (observerNum === 3) {
      alert(`Н3: ${this.observer3.value()}`);
    }
  }

  remove(observerNum: number): void {
    if (observerNum === 1) {
      alert('1 - удален');
      this.subject.removeObserver(this.observer1);
    }

    if (observerNum === 2) {
      alert('2 - удален');
      this.subject.removeObserver(this.observer2);
    }

    if (observerNum === 3) {
      alert('3 - удален');
      this.subject.removeObserver(this.observer3);
    }
  }

}
