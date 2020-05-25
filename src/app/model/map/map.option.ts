/// <reference types="@types/googlemaps" />

import { MAP_STANDARD_THEME, MAP_DARK_THEME } from './map-style';

export class MapOption {
  public option: google.maps.MapOptions;
  public dashLineScale: number;
  public backgroundCSS: string;
  public countryGeoLocation: MapCenterGeoLocation;

  constructor(
    private mapTheme: "Standard" | "Dark",
    option?: google.maps.MapOptions,
    countryToZoomIn?: Countries
  ) {
    let countryGeo = new CountryGeoCode();
    let countryLatLng = countryGeo.getCountry(countryToZoomIn);
    this.countryGeoLocation = countryLatLng;
    this.mapTheme = this.mapTheme || "Standard";

    this.option = {
      fullscreenControl: true,
      ...countryLatLng,
    };

    if (!this.isDarkTheme) {
      this.dashLineScale = 3;      
      this.option.styles = MAP_STANDARD_THEME;
    } else {
      this.backgroundCSS = "background: #2b2b2b !important";
      this.dashLineScale = 2;
      this.option.styles = MAP_DARK_THEME;
    }

    if (option) {
      this.option = Object.assign(this.option, option);
    }
  }

  get isDarkTheme(): boolean {
    return this.mapTheme === "Dark";
  }
}

type Countries = "ID" | "SG" | "PH" | "TH" | "VN" | "HK" | "TW" | "SK";

export class CountryGeoCode {
  private _list: Map<Countries, MapCenterGeoLocation> = new Map();
  constructor() {
    this._list.set("ID", {
      center: new google.maps.LatLng(-2.3933207, 108.8552124),
      zoom: 5,
    });
    this._list.set("SG", {
      center: new google.maps.LatLng(1.335, 103.85),
      zoom: 11,
    });
    this._list.set("PH", {
      center: new google.maps.LatLng(11.6736301, 118.1274118),
      zoom: 6,
    });
    this._list.set("TH", {
      center: new google.maps.LatLng(15.870032, 100.992541),
      zoom: 6,
    });
    this._list.set("VN", {
      center: new google.maps.LatLng(14.058324, 108.277199),
      zoom: 6,
    });
    this._list.set("HK", {
      center: new google.maps.LatLng(22.3529808, 113.9876168),
      zoom: 11,
    });
    this._list.set("TW", {
      center: new google.maps.LatLng(23.7083589, 120.6016743),
      zoom: 8.5,
    });
    this._list.set("SK", {
      center: new google.maps.LatLng(35.802673, 125.6303888),
      zoom: 7,
    });
  }

  getCountry(mapName: Countries) {
    let countryCode = MapNameToCountryShortName[mapName] || "SG";
    return this._list.get(countryCode);
  }
}

class MapCenterGeoLocation {
  center: google.maps.LatLng;
  zoom: number;
}

export const MapNameToCountryShortName = {
  "malaysia-singapore-brunei": "SG",
  indonesia: "ID",
  philippines: "PH",
  thailand: "TH",
  vietnam: "VN",
  hongkong: "HK",
  taiwan: "TW",
  "south-korea": "SK",
};
