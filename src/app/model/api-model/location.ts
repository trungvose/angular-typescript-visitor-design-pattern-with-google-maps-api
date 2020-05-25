export class LocationApi {
  public street: string;
  public postalCode: number;
  public city: string;
  public country: string;
  public geoCoordinate: GeoCoordinateApi;
}

export class GeoCoordinateApi {
  public latitude: number = 0;
  public longitude: number = 0;
}
