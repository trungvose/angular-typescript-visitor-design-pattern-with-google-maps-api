import { LocationApi } from "./location";

export class PointModel {
  public id: string;
  public sequence: number;
  public description: string;
  public location: LocationApi;

  //And many more properties
  public tasks: any[];
}
