import { Beverage } from './beverage.abstract.class';

export abstract class CondimentDecorator
  extends Beverage {

  abstract getDescription(): string;

}
