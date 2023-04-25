
import { Component, OnInit } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { Router } from '@angular/router';
import { MapsService } from './maps.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  public newMap: any;
  public marker: any;
  public nombre: String="";
  public lat_sel: String="";
  public lng_sel: String="";
  public tipo: String ="";
  
  constructor(
    public verDestino:MapsService,
    public router:Router,
    public geolocation:Geolocation
  ) { }

  ngOnInit() {
    this.mapa();
    this.getDestino();
  }

  getDestino(){
    // this.nombre
    // this.lat_sel
    // this.lng_sel  
    
    const res=this.verDestino.getDestino();
    res.then((response) => {
      console.log("🚀 ~ file: auto.page.ts:34 ~ AutoPage ~ res.then ~ response:", response)
      // Si hay sesion, no se hace nada
      this.nombre=response.data;
    
    }).catch((error) => {
      console.log(error.response.status);
      console.log("🚀 ~ file: inicio-sesion.page.ts:103 ~ InicioSesionPage ~ res.then ~ error:", error)
      if(error.response.status==401) //si si 401 entonces nos pide inicio de sesion
      this.router.navigate(["inicio-sesion"])
    }) 
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
    this.newMap.setOnMapClickListener((event:any) => {
      this.newMap.removeMarker(this.marker);
      this.addMarker(event);
    });
   
  }
  async addMarker(nuevoPunto:any){
    console.log("AustinCejudo ", nuevoPunto)
    this.lat_sel=nuevoPunto.latitude
    this.lng_sel=nuevoPunto.longitude

  
    this.marker = await this.newMap.addMarker({
      coordinate: {
        lat: nuevoPunto.latitude,
        lng: nuevoPunto.longitude,
          // lat: 19.3302747,
          // lng: -99.1166965,
      },
      draggable: true,
    });

  }
}
