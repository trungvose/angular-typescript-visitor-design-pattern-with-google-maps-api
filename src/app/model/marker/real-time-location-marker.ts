import { CustomMarker, CustomMarkerType } from "./custom-marker";
import { RealtimeLocationModel } from "../api-model/realtime-location";
import { CustomMarkerVisitor } from "../visitor/custom-marker-visitor";
import { MapIcon } from "./map-icon";

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
        <div>${new Date(realTimeLocation.capturedTimeStamp).toString()}</div>
        <div>(${latitude}, ${longitude})</div>
    `;
    this.icon = {
      url: MapIcon.REAL_TIME_ICON,
      anchor: new google.maps.Point(8, 8), // anchor (move to center of marker),
      scaledSize: new google.maps.Size(17, 17), // scaled size (required for Retina display icon)
    };
  }

  accept(visitor: CustomMarkerVisitor): void {
    visitor.visitRealTimeLocation(this);
  }

  /**
   * Concrete Components may have special methods that don't exist in their
   * base class or interface. The Visitor is still able to use these methods
   * since it's aware of the component's concrete class.
   */
  concreteMethodOfRealTimeLocation() {
    return "Real time";
  }
}
