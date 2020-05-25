import { CustomMarkerVisitor } from "../visitor/custom-marker-visitor";

export abstract class CustomMarker<T> {
  data: T;
  abstract id: string;
  abstract type: CustomMarkerType;
  abstract position: google.maps.LatLng;
  abstract popupContent: string;
  abstract icon: google.maps.Icon;
  abstract title: string;

  constructor(data: T) {
    this.data = data;
  }
  
  /**
   * The CustomMarker declares an `accept` method that should take the base
   * visitor interface as an argument.
   */
  abstract accept(visitor: CustomMarkerVisitor): void;
}

export enum CustomMarkerType {
  POINT = "POINT",
  START_LOCATION = "START_LOCATION",
  REAL_TIME_LOCATION = "REAL_TIME_LOCATION",
}