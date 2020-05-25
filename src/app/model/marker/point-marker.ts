import { CustomMarker, CustomMarkerType } from "./custom-marker";
import { PointModel } from "../api-model/point";
import { CustomMarkerVisitor } from "../visitor/custom-marker-visitor";
import { MapIcon } from './map-icon';

export class PointMarker extends CustomMarker<PointModel> {
  id: string;
  type: CustomMarkerType;
  position: google.maps.LatLng;
  popupContent: string;
  data: PointModel;
  icon: google.maps.Icon;
  title: string;

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
    this.icon = {
      url: MapIcon.POINT_ICON,
      scaledSize: new google.maps.Size(18, 18)      
    }
    this.title = `Point ${point.sequence + 1}`;
    this.popupContent = `
        <div><strong>Point ${point.sequence + 1}</strong></div>
        <div>${street}, ${postalCode}</div>
    `;
  }

  accept(visitor: CustomMarkerVisitor) {
    visitor.visitPointMarker(this);
  }
}
