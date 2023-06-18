import { Component, OnInit, NgZone, AfterViewInit} from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { MapsService } from './maps.service';
import { Maps } from './maps';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements AfterViewInit{

  public marker: any;
  public newMap: any;
  public positionSet:any;
  public position:any;
  public infowindow:any;
  public resp:any;
  public nuevoPunto:any;
  public x1:any;
  public x2:any;
  
  public error_mapa:any = "";
  public success_mapa:any = "";

  public agregarPuntoEncuentro:Maps={
    latitud: '',
    longitud:'',
    grupo_id:''
  }

  constructor(
    public geolocation:Geolocation,
    private ngZone:NgZone,
    private mapsService:MapsService,
    public router:Router,
    private activatedRoute:ActivatedRoute


  ) {}
  
  async ngAfterViewInit(){
    // setTimeout(()=> {this.createMap(this.ref.nativeElement);}, 700); //not a best practice but it makes the plugin work
    setTimeout(()=> {this.mapa()}, 3000); 
  }

  /*
  ngOnInit() {
    // setTimeout(()=> {this.createMap(this.ref.nativeElement);}, 700); 
    setTimeout(()=> {this.mapa()}, 1000); 
    // this.mapa();
  }
  /** */
  
  async mapa(){
    const position = this.position;
    const apiKey = 'AIzaSyDV-H5sPIyGH5EgU-pkrJ6WIetYiaryN1c';
    const mapRef = document.getElementById('map');
    const el1: HTMLElement = mapRef!;
    const resp = await this.geolocation.getCurrentPosition();
    console.log("Coordenadas latitud: ", resp.coords.latitude);
    console.log("Coordenadas longitud: ", resp.coords.longitude);
    console.log(resp);
    try {
      this.newMap = await GoogleMap.create({
        id: 'my-map', // Unique identifier for this map instance
        element: el1, // reference to the capacitor-google-map element
        apiKey: apiKey, // Your Google Maps API Key
        config: {
          center: {
            // The initial position to be rendered by the map
            lat: resp.coords.latitude,
            lng: resp.coords.longitude,
          },
          zoom: 15, // The initial zoom level to be rendered by the map
        },
      });
    }
    catch(error){
      console.log({error:error});
      this.error_mapa = error;
    }
    console.warn(this.newMap);
    if(this.newMap === undefined){
      this.success_mapa = "No crea mapa";
    }else{
      this.success_mapa = "No precisamente funciona, pero lo crea";
    }

    this.marker = await this.newMap.addMarker({
        coordinate: {
          lat: resp.coords.latitude,
          lng: resp.coords.longitude,
        },
        draggable: true,
    });

      this.newMap.setOnMapClickListener((event:any) => {
      this.newMap.removeMarker(this.marker);
      this.addMarker(event);
    });

  }

  async addMarker(nuevoPunto:any){
    console.log("🚀 ~ ", nuevoPunto)

    this.marker = await this.newMap.addMarker({
      coordinate: {
        lat: nuevoPunto.latitude,
        lng: nuevoPunto.longitude,
      },
      draggable: true,
    });
    this.x1= nuevoPunto.latitude;
    this.x2= nuevoPunto.longitude;
  }


  async mylocation() {
    this.resp = await this.geolocation.getCurrentPosition();
  }

  aceptar() {
      console.log("Coordenadas latitud: ", this.x1);
      console.log("Coordenadas longitud: ", this.x2);
          if(confirm(`¿Deseas agregar este como tu punto de encuentro?`)){
            const token = localStorage.getItem('token');
            const grupo_id = localStorage.getItem('grupo_id')

            this.agregarPuntoEncuentro.latitud = this.x1;
            this.agregarPuntoEncuentro.longitud = this.x2;
            this.agregarPuntoEncuentro.grupo_id = grupo_id;
            console.log(this.agregarPuntoEncuentro)
            const res = this.mapsService.agregarPuntoEncuentro(this.agregarPuntoEncuentro)

          }
    }

    back(){
      this.router.navigate(['/main']); 
  }

}
