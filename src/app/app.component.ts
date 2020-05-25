import { Component, OnInit } from "@angular/core";
import { MapApiService } from "./app.service";
import { RouteModel } from "./model/api-model/route";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["app.component.css"]
})
export class AppComponent implements OnInit {
  messeges: string[] = [];
  route: RouteModel;
  constructor(private _api: MapApiService) {}

  ngOnInit() {
    this.loadRoute();
    this.onLogMessage();
  }

  loadRoute() {
    this._api.getRoute().subscribe(route => {
      this.route = route;
    });
  }

  onLogMessage() {
    this._api.messageUpdate$.subscribe(message => {
      this.messeges = [message, ...this.messeges];
    });
  }

  clearLog() {
    this.messeges = [];
  }
}
