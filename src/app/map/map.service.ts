/// <reference types="@types/googlemaps" />

import { Injectable, NgZone } from "@angular/core";
import { MapLoaderService } from "../map.loader.service";
import { RouteModel } from "../model/api-model/route";
import { BaseMap } from "../model/map/base.map";
import { MapOption } from "../model/map/map.option";
import { CustomMarker } from "../model/marker/custom-marker";
import { RealTimeLocationMarker } from "../model/marker/real-time-location-marker";
import { StartLocationMarker } from "../model/marker/start-location-marker";
import { ZylCallback } from "../model/util.ts/callback";
import { PointMarker } from "../model/marker/point-marker";
import { MarkerMouseOverVisitor } from '../model/visitor/marker-mouse-over-visitor';
import { MarkerMouseOutVisitor } from '../model/visitor/marker-mouse-out-visitor';
import { MapApiService } from "../app.service";
import { MarkerMouseClickVisitor } from "../model/visitor/marker-mouse-click-visitor";

@Injectable()
export class MapService extends BaseMap {
  googleAPIKey: string = "AIzaSyBlDdeATvYygScwm6Ue6b8t4yADwhe39JU";
  markers: google.maps.Marker[] = [];

  constructor(private _zone: NgZone, private _api: MapApiService) {
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
    this._zone.runOutsideAngular(() => {
      if (!this.serviceIsLoaded) {
        this.initBaseMap(document.getElementById("map"));
        this.serviceIsLoaded = true;
      }
    });
  }

  showRoute(route: RouteModel) {
    let customMarkers = this.generateMarkerData(route);
    customMarkers.forEach(markerData =>{
      this.addMarkerToMap(markerData)
    })
  }

  addMarkerToMap(markerData: CustomMarker<any>){
    let bounds = []
    let marker = new google.maps.Marker({
      map: this.map,
      position: markerData.position,
      icon: markerData.icon,
      title: markerData.title
    });

    google.maps.event.addListener(marker, 'mouseover', () => {            
      this.openInfoWindow(marker, markerData.popupContent)
      markerData.accept(new MarkerMouseOverVisitor(this._api));
    });

    google.maps.event.addListener(marker, 'mouseout', () => {
        this.infoWindow.close();
        markerData.accept(new MarkerMouseOutVisitor(this._api));
    });

    google.maps.event.addListener(marker, 'click', () => {
        markerData.accept(new MarkerMouseClickVisitor(this._api));
    });

    bounds.push(markerData.position);
    this.markers.push(marker);
    this.generateBounds(bounds);
  }

  generateMarkerData(route: RouteModel): CustomMarker<any>[]{
    let customMarkers: CustomMarker<any>[] = [];

    if (route.startLocation) {
      customMarkers.push(new StartLocationMarker(route.startLocation));
    }

    if (route.realTimeLocation) {
      customMarkers.push(new RealTimeLocationMarker(route.realTimeLocation));
    }

    route.points.forEach((point) => {
      customMarkers.push(new PointMarker(point));
    });
    return customMarkers;
  }
}
