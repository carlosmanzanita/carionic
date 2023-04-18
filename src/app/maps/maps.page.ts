
import { Component, OnInit } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  public newMap: any;
  public marker: any;

  constructor(
    public geolocation:Geolocation,
  ) { }

  ngOnInit() {
    this.mapa();
  }

  async mapa(){
    const apiKey = 'AIzaSyDV-H5sPIyGH5EgU-pkrJ6WIetYiaryN1c';
    const mapRef = document.getElementById('map');
    const el1: HTMLElement = mapRef!;
    const resp = await this.geolocation.getCurrentPosition();
    console.log("Coordenadas latitud: ", resp.coords.latitude);
    console.log("Coordenadas longitud: ", resp.coords.longitude);

    this.newMap = await GoogleMap.create({
      id: 'my-map', // Unique identifier for this map instance
      element: el1, // reference to the capacitor-google-map element
      apiKey: apiKey, // Your Google Maps API Key
      config: {
        center: {
          // The initial position to be rendered by the map
          lat: resp.coords.latitude,
          lng: resp.coords.longitude,
          // lat: 19.3302747,
          // lng: -99.1166965,
        },
        zoom: 15, // The initial zoom level to be rendered by the map
        // disableDefaultUI: true,
        // clickableIcons: false,
      },
    });

    this.marker = await this.newMap.addMarker({
      coordinate: {
        lat: resp.coords.latitude,
        lng: resp.coords.longitude,
          // lat: 19.3302747,
          // lng: -99.1166965,
      },
      draggable: false,
  });
   
  }
}
