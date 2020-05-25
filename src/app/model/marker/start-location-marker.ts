import { StartLocationModel } from "../api-model/start-location";
import { CustomMarker, CustomMarkerType } from "./custom-marker";
import { CustomMarkerVisitor } from "../visitor/custom-marker-visitor";

export class StartLocationMarker extends CustomMarker<StartLocationModel> {
  id: string;
  type: CustomMarkerType;
  position: google.maps.LatLng;
  popupContent: string;

  constructor(startLocation: StartLocationModel){
    super(startLocation);
    this.type = CustomMarkerType.START_LOCATION;
    
  }
  accept(visitor: CustomMarkerVisitor) {
    visitor.visitStartLocation(this);
  }
}
