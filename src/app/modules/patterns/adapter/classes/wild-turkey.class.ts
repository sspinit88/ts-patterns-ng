import { Turkey } from '../interfaces/turkey.interface';

export class WildTurkey
  implements Turkey {
  fly(): void {
    console.log(`I'm WildTurkey and I can fly not very well.`);
  }

  gobble(): void {
    console.log(`Кхм..., ам-ам-ам!`);
  }
}
