import { Component, OnInit } from "@angular/core";
import { MapApiService } from "./app.service";
import { RouteModel } from "./model/api-model/route";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  route: RouteModel;
  constructor(private _api: MapApiService) {}

  ngOnInit() {
    this.loadRoute()
  }

  loadRoute() {
    this._api.getRoute().subscribe((route) => {
      this.route = route;
    });
  }
}
