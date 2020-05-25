import { PointMarker } from "../marker/point-marker";
import { StartLocationMarker } from "../marker/start-location-marker";
import { RealTimeLocationMarker } from "../marker/real-time-location-marker";

export interface CustomMarkerVisitor {
  visitPointMarker(marker: PointMarker);
  visitStartLocation(marker: StartLocationMarker);
  visitRealTimeLocation(marker: RealTimeLocationMarker);
}
