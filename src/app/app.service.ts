import { Injectable } from "@angular/core";
import { RouteModel } from "./model/api-model/route";
import { of, Subject } from "rxjs";
import { delay } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class MapApiService {
  messageUpdate$ = new Subject<string>();
  constructor() {}

  sendMessage(msg: string) {
    this.messageUpdate$.next(msg);
  }

  getRoute() {
    let route: RouteModel = {
      id: "Route1",
      points: [
        {
          description: "Pick Up",
          id: "Point1",
          sequence: 0,
          location: {
            geoCoordinate: {
              latitude: 1.3052818,
              longitude: 103.8758533
            },
            city: "Singapore",
            country: "Singapore",
            street: "McDonald's Kallang (Stadium), 200 Stadium Blvd",
            postalCode: 397801
          },
          tasks: []
        },
        {
          description: "Drop off",
          id: "Point2",
          sequence: 1,
          location: {
            geoCoordinate: {
              latitude: 1.2994155,
              longitude: 103.9054494
            },
            city: "Singapore",
            country: "Singapore",
            street: "Hvper Sport, 920 East Coast Parkway",
            postalCode: 436899
          },
          tasks: []
        }
      ],
      startLocation: {
        location: {
          geoCoordinate: {
            latitude: 1.3007546,
            longitude: 103.8612966
          },
          city: "Singapore",
          country: "Singapore",
          street: "Golden Mile Complex, 5001 Beach Rd",
          postalCode: 199588
        }
      },
      realTimeLocation: {
        geoCoordinate: {
          latitude: 1.300151,
          longitude: 103.891317
        },
        capturedTimeStamp: "2020-05-25T02:49:18.152Z"
      },
      pathFromStartLocation: null
    };

    return of(route).pipe(delay(500));
  }
}
