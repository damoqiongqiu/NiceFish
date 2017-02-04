import { Base } from './base';

export class TextArea extends Base<string> {
  controlType = 'textarea';
  type: string;
  rows: number;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
    this.rows = options['rows'] || 1;
  }
}
