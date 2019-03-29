import { FieldBase } from "./field-base";

export class TextArea extends FieldBase<string> {
  controlType = "textarea";
  rows: number;
  constructor(options: {} = {}) {
    super(options);
    this.rows = options["rows"] || 1;
  }
}
