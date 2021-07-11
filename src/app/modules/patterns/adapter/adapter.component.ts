import { Component } from '@angular/core';
import { DuckTestDrive } from './classes/duck-test-drive.class';

@Component({
  selector: 'app-adapter',
  templateUrl: './adapter.component.html',
  styleUrls: ['./adapter.component.scss']
})
export class AdapterComponent {

  constructor() {
  }

  duckTestDrive(): void {
    alert('Открой консоль!');
    new DuckTestDrive().main();
  }

}
