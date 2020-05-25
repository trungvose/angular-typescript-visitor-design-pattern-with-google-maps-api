import { Injectable } from "@angular/core";
import { RouteModel } from "./model/api-model/route";
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: "root" })
export class MapApiService {
  constructor() {}

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
              latitude: 1.295143,
              longitude: 103.8855761,
            },
            city: "Singapore",
            country: "Singapore",
            street: "Singapore Swimming Club, 45 Tg Rhu Rd",
            postalCode: 436899,
          },
          tasks: [],
        },
        {
            description: "Drop off",
            id: "Point2",
            sequence: 0,
            location: {
              geoCoordinate: {
                latitude: 1.2994155,
                longitude: 103.9054494,
              },
              city: "Singapore",
              country: "Singapore",
              street: "Hvper Sport, 920 East Coast Parkway, #01-14/15/16 Parkland Green",
              postalCode: 436899,
            },
            tasks: [],
          },
      ],
      startLocation: {
        location: {
          geoCoordinate: {
            latitude: 1.2941093,
            longitude: 103.8682161,
          },
          city: "Singapore",
          country: "Singapore",
          street: "Leisure Park Kallang, 5 Stadium Walk",
          postalCode: 397693,
        },
      },
      realTimeLocation: {
        geoCoordinate: {
          latitude: 1.295434,
          longitude: 103.891826,
        },
        capturedTimeStamp: "2020-05-25T02:49:18.152Z",
      },
      pathFromStartLocation: null,
    };

    return of(route).pipe(delay(500))
  }
}
