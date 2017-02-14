import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'boolean'
})

export class BooleanPipe implements PipeTransform { 
	constructor() {}
	
	transform(flag: string): string { 
		return flag==="true" ? "text-danger":"";
	}
}
