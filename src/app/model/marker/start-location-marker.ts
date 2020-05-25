import { StartLocationModel } from "../api-model/start-location";
import { CustomMarker, CustomMarkerType } from "./custom-marker";
import { CustomMarkerVisitor } from "../visitor/custom-marker-visitor";
import { MapIcon } from "./map-icon";

export class StartLocationMarker extends CustomMarker<StartLocationModel> {
  id: string;
  type: CustomMarkerType;
  position: google.maps.LatLng;
  popupContent: string;
  icon: google.maps.Icon;
  title: string;

  constructor(startLocation: StartLocationModel) {
    super(startLocation);
    
    let {
      street,
      postalCode,
      geoCoordinate: { latitude, longitude },
    } = startLocation.location;

    this.type = CustomMarkerType.START_LOCATION;
    this.title = "Start location";
    this.position = new google.maps.LatLng(latitude, longitude);
    this.icon = {
      url: MapIcon.START_LOCATION_ICON,
    };
    this.popupContent = `
        <div>Start location</div>
        <div>${street}, ${postalCode}</div>
    `;
  }
  accept(visitor: CustomMarkerVisitor) {
    visitor.visitStartLocation(this);
  }
}
