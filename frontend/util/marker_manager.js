export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
        this.createMarkerFromBusiness = this.createMarkerFromBusiness.bind(this);
    }

    updateMarkers(businesses) {
        const map = this.map;
        if (Array.isArray(businesses)) {
            businesses.forEach((business, index) => this.createMarkerFromBusiness(business, map, index));
        } else {
            this.createMarkerFromBusiness(businesses, map, null);
        }
    }

    createMarkerFromBusiness(business, map, num) {
        if (num === null) {
            const marker = new google.maps.Marker({
                position: { lat: business.latitude, lng: business.longitude },
                map: map,
                title: business.name
            });
        }else{
            const marker = new google.maps.Marker({
                position: { lat: business.latitude, lng: business.longitude },
                label: (num + 1).toString(),
                map: map,
                title: business.name
            });
        }
    }
}