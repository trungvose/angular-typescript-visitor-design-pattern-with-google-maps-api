import { CustomMarker, CustomMarkerType } from "./custom-marker";
import { RealtimeLocationModel } from "../api-model/realtime-location";
import { CustomMarkerVisitor } from "../visitor/custom-marker-visitor";

export class RealTimeLocationMarker extends CustomMarker<
  RealtimeLocationModel
> {
  id: string;
  type: CustomMarkerType;
  position: google.maps.LatLng;
  popupContent: string;
  icon: google.maps.Icon;
  title: string;

  constructor(realTimeLocation: RealtimeLocationModel) {
    super(realTimeLocation);
    let { latitude, longitude } = realTimeLocation.geoCoordinate;
    this.id = `${new Date().getTime()}`;
    this.type = CustomMarkerType.REAL_TIME_LOCATION;
    this.position = new google.maps.LatLng(latitude, longitude);
    this.title = `Real time location`;
    this.popupContent = `
        <div>Real time location</div>
        <div>(${latitude}, ${longitude})</div>
    `;
  }

  accept(visitor: CustomMarkerVisitor): void {
    visitor.visitRealTimeLocation(this);
  }
}
