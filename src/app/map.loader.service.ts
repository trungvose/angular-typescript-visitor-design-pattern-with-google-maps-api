export class MapLoaderService {
  private static promise: Promise<any>;
  public static load(googleKey: string, libs?: string): Promise<any> {
    let map = {
      URL: `https://maps.googleapis.com/maps/api/js?libraries=geometry${libs ? libs : ""}&key=${googleKey}&callback=__onGoogleLoaded`,
    };    
    if (!this.promise) {      
      this.promise = new Promise(resolve => {        
        if (typeof google !== "undefined") {
          resolve("already loaded");
          return false;
        }
        this.loadScript(map.URL);
        window['__onGoogleLoaded'] = $event => {
            resolve('google maps api loaded');
        };
      });
    }
    return this.promise;
  }

  //this function will work cross-browser for loading scripts asynchronously
  static loadScript(src, callback?): void {
    var s: any, r, t;
    r = false;
    s = document.createElement("script");
    s.type = "text/javascript";
    s.defer = true;
    s.src = src;
    s.onload = s.onreadystatechange = function() {
      //console.log( this.readyState ); //uncomment this line to see which ready states are called.
      if (!r && (!this.readyState || this.readyState == "complete")) {
        r = true;
        if (typeof callback === "function") callback();
      }
    };
    t = document.getElementsByTagName("script")[0];
    t.parentNode.insertBefore(s, t);
  }
}
