import { CustomMarkerVisitor } from "./custom-marker-visitor";
import { PointMarker } from "../marker/point-marker";
import { StartLocationMarker } from "../marker/start-location-marker";
import { RealTimeLocationMarker } from "../marker/real-time-location-marker";
import { MapService } from "src/app/map/map.service";

export class MarkerMouseOverVisitor implements CustomMarkerVisitor {
  constructor(private _map: MapService) {

  }
  
  visitPointMarker(marker: PointMarker) {
    throw new Error("Method not implemented.");
  }

  visitStartLocation(marker: StartLocationMarker) {
    throw new Error("Method not implemented.");
  }

  visitRealTimeLocation(marker: RealTimeLocationMarker) {
    throw new Error("Method not implemented.");
  }
}
