import { PointModel } from "./point";
import { StartLocationModel } from "./start-location";
import { RealtimeLocationModel } from "./realtime-location";

export class RouteModel {
  id: string;
  points: PointModel[];
  startLocation: StartLocationModel;
  realTimeLocation: RealtimeLocationModel;
  
  //And many more properties
  pathFromStartLocation: any;
}
