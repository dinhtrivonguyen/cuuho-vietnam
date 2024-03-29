import { StorageService } from 'src/app/core/services/storage.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor(private storage: StorageService) { }

  public updateLocation(): any {
    console.log("upload to location")
    var self = this;
    navigator.geolocation.getCurrentPosition(function (position: any) {
      console.log("getCurrentLocation")
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      self.storage.location = { lat: lat, lng: long }
      self.storage.last_location = { lat: lat, lng: long }
    });
  }

}
