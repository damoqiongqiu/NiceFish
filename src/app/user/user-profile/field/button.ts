import { Base } from './base';

export class Button extends Base<string> {
  controlType = 'button';
  constructor(options: {} = {}) {
    super(options);
  }
}
