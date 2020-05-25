import { CustomMarkerVisitor } from "./custom-marker-visitor";
import { PointMarker } from "../marker/point-marker";
import { StartLocationMarker } from "../marker/start-location-marker";
import { RealTimeLocationMarker } from "../marker/real-time-location-marker";
import { MapService } from "src/app/map/map.service";
import { CustomMarker } from "../marker/custom-marker";
import { MapApiService } from "../../app.service";

export class MarkerMouseOutVisitor implements CustomMarkerVisitor {
  constructor(private _api: MapApiService) {}

  visitPointMarker(marker: PointMarker) {
    this.logMessage(marker);
  }

  visitStartLocation(marker: StartLocationMarker) {
    this.logMessage(marker);
  }

  visitRealTimeLocation(marker: RealTimeLocationMarker) {
    this.logMessage(marker);
  }

  logMessage(marker: CustomMarker<any>){
    this._api.sendMessage(`${marker.title} mouse out`)
  }
}
