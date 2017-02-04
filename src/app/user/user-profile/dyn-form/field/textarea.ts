import { Base } from './base';

export class TextArea extends Base<string> {
  controlType = 'textarea';
  rows: number;
  constructor(options: {} = {}) {
    super(options);
    this.rows = options['rows'] || 1;
  }
}
