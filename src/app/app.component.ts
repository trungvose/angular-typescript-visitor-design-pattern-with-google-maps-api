import { Component, OnInit } from "@angular/core";
import { MapApiService } from "./app.service";
import { RouteModel } from "./model/api-model/route";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  messeges: string[] = []
  route: RouteModel;
  constructor(private _api: MapApiService) {}

  ngOnInit() {
    this.loadRoute();
  }

  loadRoute() {
    this._api.getRoute().subscribe((route) => {
      this.route = route;
    });
  }

  onLogMessage(){
    this._api.messageUpdate$.subscribe(message => {
      this.messeges.push(message);
    })
  }
}
