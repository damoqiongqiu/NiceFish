import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router, UrlTree, PRIMARY_OUTLET, UrlSegmentGroup, UrlSegment } from "@angular/router";
import { PostTableService } from "./post-table.service";
import { flyIn } from "../../../shared/animations/fly-in";

@Component({
  selector: "post-table",
  templateUrl: "./post-table.component.html",
  styleUrls: ["./post-table.component.scss"],
  animations: [
    flyIn
  ]
})
export class PostTableComponent implements OnInit {
  @Input() dataURL = "mock-data/postlist-mock.json";

  public postList: Array<any>;

  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute,
    public postTableService: PostTableService
  ) {

  }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      params => this.getPostsByPage(params["page"])
    );
  }

  public getPostsByPage(page: Number) {
    console.log("页码>" + page);
    return this.postTableService.getPostTable(this.dataURL).subscribe(
      res => {
        console.log(res);
        this.postList = res.items;
      },
      error => { console.log(error) },
      () => { }
    );
  }

  public pageChanged(event: any): void {
    let urlTree: UrlTree = this.router.parseUrl(this.router.url);
    const g: UrlSegmentGroup = urlTree.root.children[PRIMARY_OUTLET];
    const s: UrlSegment[] = g.segments;
    this.router.navigateByUrl(s[0] + "/posttable/page/" + event.page);
  }

  public goToWrite(): void {
    this.router.navigateByUrl("user/write");
  }

  public editPost(event): void {
    let target = event.currentTarget;
    let nameAttr = target.attributes.name;
    let value = nameAttr.nodeValue;
    console.log("postId>" + value);
  }

  public top(event): void {
    let target = event.currentTarget;
    let nameAttr = target.attributes.name;
    let value = nameAttr.nodeValue;
    console.log("postId>" + value);
  }

  public unTop(event): void {
    let target = event.currentTarget;
    let nameAttr = target.attributes.name;
    let value = nameAttr.nodeValue;
    console.log("postId>" + value);
  }

  public delPost(event): void {
    let target = event.currentTarget;
    let nameAttr = target.attributes.name;
    let value = nameAttr.nodeValue;
    console.log("postId>" + value);
  }

  public onRowSelect(event): void {
    console.log(event.data);
  }

  public onRowUnselect(event): void {
    console.log(event.data);
  }
}
