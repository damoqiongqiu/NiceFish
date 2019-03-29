import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: "trim"
})

export class TrimStringPipe implements PipeTransform {
	constructor() { }

	transform(source = ""): string {
		source = source ? source : "";
		return source.replace(/\s+/g, "");
	}
}
