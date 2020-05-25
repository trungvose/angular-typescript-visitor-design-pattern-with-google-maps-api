import { CustomMarker, CustomMarkerType } from "./custom-marker";
import { PointModel } from "../api-model/point";
import { CustomMarkerVisitor } from "../visitor/custom-marker-visitor";

export class PointMarker extends CustomMarker<PointModel> {
  id: string;
  type: CustomMarkerType;
  position: google.maps.LatLng;
  popupContent: string;
  data: PointModel;

  constructor(point: PointModel) {
    super(point);

    let {
      street,
      postalCode,
      geoCoordinate: { latitude, longitude },
    } = point.location;
    
    this.id = point.id;
    this.type = CustomMarkerType.POINT;
    this.position = new google.maps.LatLng(latitude, longitude);
    this.popupContent = `
        <div>Point ${point.sequence}</div>
        <div>${street}, ${postalCode}</div>
    `;
  }

  accept(visitor: CustomMarkerVisitor) {
    visitor.visitPointMarker(this);
  }
}
