import { DestinosService } from './../destinos/destinos.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleMap } from '@capacitor/google-maps';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@Component({
  selector: 'app-ver-destino',
  templateUrl: './ver-destino.page.html',
  styleUrls: ['./ver-destino.page.scss'],
})
export class VerDestinoPage implements OnInit {
  public destino:any=[]
  public newMap: any;
  public marker: any;

  constructor(
    public geolocation:Geolocation,
    public router:Router,
    public destinosService:DestinosService,
  ) { }

  ngOnInit() {
    this.verDestino()

  }
verDestino(){
  const destino_id = this.router.url.split('?')[0].split('/').pop()
  console.log("🚀 ~ file: ver-destino.page.ts:19 ~ VerDestinoPage ~ verDestino ~ destino_id:", destino_id)
  const res=this.destinosService.getDestino(destino_id)
  res.then((response) => {
    console.log("🚀 ~ file: auto.page.ts:34 ~ AutoPage ~ res.then ~ response:", response)
    // Si hay sesion, no se hace nada
    this.destino=response.data;
    console.log("🚀 ~ file: ver-auto.page.ts:29 ~ VerAutoPage ~ res.then ~ this.destino:", this.destino)
    this.mapa(this.destino.latitud, this.destino.longitud);
  
  }).catch((error) => {
    console.log(error.response.status);
    console.log("🚀 ~ file: inicio-sesion.page.ts:103 ~ InicioSesionPage ~ res.then ~ error:", error)
    if(error.response.status==401) //si si 401 entonces nos pide inicio de sesion
    this.router.navigate(["inicio-sesion"])
  }) 
}






async mapa(latitud:any,longitud:any){
  const apiKey = 'AIzaSyDV-H5sPIyGH5EgU-pkrJ6WIetYiaryN1c';
  const mapRef = document.getElementById('map-destino');
  const el1: HTMLElement = mapRef!;
  const resp = await this.geolocation.getCurrentPosition();
  
  console.log("Coordenadas latitud: ", latitud);
  console.log("Coordenadas longitud: ", longitud);

  this.newMap = await GoogleMap.create({
    id: 'my-map-destino', // Unique identifier for this map instance
    element: el1, // reference to the capacitor-google-map element
    apiKey: apiKey, // Your Google Maps API Key
    config: {
      center: {
        // The initial position to be rendered by the map
        lat: latitud,
        lng: longitud,
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
      lat: latitud,
      lng: longitud,
        // lat: 19.3302747,
        // lng: -99.1166965,
    },
    draggable: false,
  });
  // this.newMap.setOnMapClickListener((event:any) => {
  //   this.newMap.removeMarker(this.marker);
  //   this.addMarker(event);
  // });
 
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
