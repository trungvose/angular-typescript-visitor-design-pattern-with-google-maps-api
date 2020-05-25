import { Component, AfterViewInit, Input, OnChanges } from "@angular/core";
import { MapService } from "./map.service";
import { RouteModel } from '../model/api-model/route';

@Component({
  selector: "map",
  templateUrl: "map.component.html",
  styleUrls: ["map.component.css"],
  providers: [MapService],
})
export class MapComponent implements OnChanges, AfterViewInit {
  @Input() route: RouteModel;

  constructor(private _map: MapService) {}

  ngAfterViewInit() {
    this._map.loadMap();
  }

  ngOnChanges(){
    if(this.route){
      this.showRoute(this.route)
    }
  }

  showRoute(route: RouteModel){
    this._map.loadMap(this._map.showRoute.bind(this, route));
  }
}
