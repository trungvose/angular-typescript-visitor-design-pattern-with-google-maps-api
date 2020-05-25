import { Component, OnInit } from "@angular/core";
import { MapService } from "./map.service";

@Component({
  selector: "map",
  templateUrl: "map.component.html",
  styleUrls: ["map.component.css"],
  providers: [MapService]
})
export class MapComponent implements OnInit {
  constructor(private _map: MapService) {}

  ngOnInit() {
    this._map.loadMap(() => {});
  }
}
