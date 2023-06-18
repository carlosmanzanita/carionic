
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { Router } from '@angular/router';
import { MapsService } from './maps.service';
import { Destino } from './destino';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements AfterViewInit {

  public newMap: any;
  public marker: any;

  public destino:Destino ={
    nombre:"",
    latitud:"",
    longitud:"",
  }
  constructor(
    public mapsService:MapsService,
    public router:Router,
    public geolocation:Geolocation
  ) { }

  async ngAfterViewInit(){
    setTimeout(()=> {this.mapa()}, 3000); 
  }

  postDestino(){
    
    let val=0;
    if(this.destino.nombre=="") val++;  
    if(this.destino.latitud=="") val++;  
    if(this.destino.longitud=="") val++;  
    console.log("postDestino");
    if(val == 0){
      const res=this.mapsService.guardarDestino(this.destino)
      
      res.then((response) => {
        console.log("🚀 ~ file: maps.page.ts:47 ~ MapsPage ~ res.then ~ response:", response)
        // Si hay sesion, no se hace nada    
        this.router.navigate(["destinos"])
      }).catch((error) => {
        console.log(error.response.status);
        console.log("🚀 ~ file: inicio-sesion.page.ts:103 ~ InicioSesionPage ~ res.then ~ error:", error)
        if(error.response.status==401) //si si 401 entonces nos pide inicio de sesion
        this.router.navigate(["inicio-sesion"])
      }) 
      
    }
    else {
      alert("Faltan datos")
    }
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
        clickableIcons: false,
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
    this.destino.latitud=nuevoPunto.latitude
    this.destino.longitud=nuevoPunto.longitude

  
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
