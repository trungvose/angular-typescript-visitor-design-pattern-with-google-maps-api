/// <reference types="@types/googlemaps" />

import { Injectable, NgZone } from "@angular/core";
import { MapLoaderService } from "../map.loader.service";
import { BaseMap } from "../model/map/base.map";
import { ZylCallback } from "../model/util.ts/callback";
import { MapOption } from "../model/map/map.option";

@Injectable()
export class MapService extends BaseMap {
  googleAPIKey: string;

  constructor() {
    super();
  }

  loadMap(fn?: ZylCallback<void>) {
    MapLoaderService.load(this.googleAPIKey).then(() => {
      if (typeof google !== "undefined") {
        this._initMap();
        fn && fn();
      }
    });
  }

  private _initMap(): void {
    this.mapOption = new MapOption("Standard", null, "SG");
    if (!this.serviceIsLoaded) {
      this.initBaseMap(document.getElementById("map"));
      this.serviceIsLoaded = true;
    }
  }
}
