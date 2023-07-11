import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BlockService {
  public subject: Subject<any> = new Subject<any>();

  constructor() {}

  public get currentBlockStatus(): Observable<any> {
    return this.subject.asObservable();
  }

  public block() {
    this.subject.next({ block: true });
  }

  public unblock() {
    this.subject.next({ block: false});
  }
}
