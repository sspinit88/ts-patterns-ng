import { Component, OnInit } from '@angular/core';
import { Singleton } from './classes/singleton.classes';

@Component({
  selector: 'app-singleton',
  templateUrl: './singleton.component.html',
  styleUrls: ['./singleton.component.scss']
})
export class SingletonComponent
  implements OnInit {

  test: any;
  testTwo: any;

  data = 'Firs Data!';

  dataTwo = 'Second Data!';

  constructor() {
  }

  ngOnInit(): void {
    this.run()
  }

  run(): void {
    this.test = Singleton.getInstance(this.data);
  }

  runAgain(): void {
    this.testTwo = Singleton.getInstance(this.dataTwo);

    alert(`Open CONSOLE!`)

    console.group('runAgain():');
    console.log('this.test:', this.test);
    console.log('this.testTwo:', this.testTwo);
    console.groupEnd();
  }

}
