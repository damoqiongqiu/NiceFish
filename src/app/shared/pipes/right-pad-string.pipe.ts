import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: "rightPad"
})

/**
 * 在字符串的右侧加三个点省略号
 */
export class RightPadStringPipe implements PipeTransform {
	constructor() { }

	transform(source = ""): string {
		source = source ? source : "";
		source += "...";
		return source;
	}
}
