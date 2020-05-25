import { CustomMarker } from './custom-marker';
import { RealtimeLocationModel } from '../api-model/realtime-location';
import { CustomMarkerVisitor } from '../visitor/custom-marker-visitor';

export class RealTimeLocationMarker extends CustomMarker<RealtimeLocationModel> {
    id: string;
    type: import("./custom-marker").CustomMarkerType;
    position: google.maps.LatLng;
    popupContent: string;    
    constructor(realTimeLocation: RealtimeLocationModel){
        super(realTimeLocation);
    }

    accept(visitor: CustomMarkerVisitor): void {        
        visitor.visitRealTimeLocation(this);
    }

}