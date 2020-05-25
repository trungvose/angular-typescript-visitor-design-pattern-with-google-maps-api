export class LocationApi {
  public street: string;
  public postalCode: string;
  public city: string;
  public country: string;
  public geoCoordinate: GeoCoordinateApi;
  public parkingTimeSeconds: number;
  public unParkingTimeSeconds: number;
}

export class GeoCoordinateApi {
  public latitude: number = 0;
  public longitude: number = 0;
  public streetViewImageUrl: string;
}
