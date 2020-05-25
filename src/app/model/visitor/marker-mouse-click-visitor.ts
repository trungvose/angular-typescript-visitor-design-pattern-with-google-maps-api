import { CustomMarkerVisitor } from "./custom-marker-visitor";
import { PointMarker } from "../marker/point-marker";
import { StartLocationMarker } from "../marker/start-location-marker";
import { RealTimeLocationMarker } from "../marker/real-time-location-marker";
import { MapApiService } from "../../app.service";
import { CustomMarker } from "../marker/custom-marker";

export class MarkerMouseClickVisitor implements CustomMarkerVisitor {
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
    this._api.sendMessage(`${marker.title} clicked`)
  }
}
