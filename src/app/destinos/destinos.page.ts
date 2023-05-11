import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleMap } from '@capacitor/google-maps';
import { DestinosService } from './destinos.service';
// import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@Component({
  selector: 'app-destinos',
  templateUrl: './destinos.page.html',
  styleUrls: ['./destinos.page.scss'],
})
export class DestinosPage implements OnInit {
  
  
  public destinos:any=[];


  constructor(
    
    public router:Router,
    public destinosService:DestinosService
    // public geolocation:Geolocation,
  ) { }

  ngOnInit() {
    this.getDestinos();
  }
  getDestinos(){
    const res=this.destinosService.getDestinos();
    res.then((response) => {
      console.log("🚀 ~ file: auto.page.ts:34 ~ AutoPage ~ res.then ~ response:", response)
      this.destinos=response.data
      // Si hay sesion, no se hace nada
    }).catch((error) => {
      console.log(error.response.status);
      console.log("🚀 ~ file: inicio-sesion.page.ts:103 ~ InicioSesionPage ~ res.then ~ error:", error)
      if(error.response.status==401) //si si 401 entonces nos pide inicio de sesion
      this.router.navigate(["inicio-sesion"])
    }) 
    
  }
  verDestino(destino_id:any){
    this.router.navigate(["ver-destino", destino_id]);
  }

  eliminar(destino_id:any){
    if(confirm("¿Deseas eliminar el vehículo?")){
      const res=this.destinosService.deleteAuto(destino_id);
      res.then((response) => {
        this.getDestinos()
      }).catch((error) => {
        console.log(error.response.status);
        console.log("🚀 ~ file: destinos.page.ts:53 ~ DestinosPage ~ res.then ~ console:", console)
        if(error.response.status==401) //si si 401 entonces nos pide inicio de sesion
        this.router.navigate(["inicio-sesion"])
      })
    }
  } 




  

 
  
}
