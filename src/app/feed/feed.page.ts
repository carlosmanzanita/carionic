import { ModalidadPieService } from './../modalidad-pie/modalidad-pie.service';
import { ModalidadAventonService } from './../modalidad-aventon/modalidad-aventon.service';
import { FeedService } from './feed.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  public user_id:any = 0;
  public destino_id:any = 0;
  public aventones:any= []
  public pies:any =[]
  public destinos:any =[]

  constructor(
    public router:Router,
    public feedService:FeedService,
    public modalidadAventonService:ModalidadAventonService,
    public modalidadPieService:ModalidadPieService
  ) { }

  ngOnInit() {
    this.getAventones()
    this.getDestinosEmergentes()
    // this.verNoSesion()
  }

  getDestinosEmergentes(){
    const res = this.modalidadAventonService.getDestinos();
    res.then((response) => {
      this.destinos = response.data;
      console.log("🚀 ~ file: feed.page.ts:37 ~ FeedPage ~ res.then ~ this.destinos:", this.destinos)
    
    }).catch((error) => {
      console.log(error.response.status);
      console.log("🚀 ~ file: inicio-sesion.page.ts:103 ~ InicioSesionPage ~ res.then ~ error:", error)
      if(error.response.status==401) //si si 401 entonces nos pide inicio de sesion
      this.router.navigate(["inicio-sesion"])
    }) 
  }

  getAventones(){
    this.aventones = [];
    const res=this.modalidadAventonService.getAventones();
    res.then((response) => {
      console.log("🚀 ~ file: auto.page.ts:34 ~ AutoPage ~ res.then ~ response:", response)
      // Si hay sesion, no se hace nada
      this.aventones=response.data.aventones;
      this.user_id=response.data.user_id;
      console.log("🚀 ~ file: feed.page.ts:31 ~ FeedPage ~ res.then ~ this.aventones:", this.aventones)
    }).catch((error) => {
      console.log(error.response.status);
      console.log("🚀 ~ file: inicio-sesion.page.ts:103 ~ InicioSesionPage ~ res.then ~ error:", error)
      if(error.response.status==401) //si si 401 entonces nos pide inicio de sesion
      this.router.navigate(["inicio-sesion"])
    }) 
  }
  getPies(){
    const res=this.modalidadPieService.getPie();
    res.then((response) => {
      console.log("🚀 ~ file: auto.page.ts:34 ~ AutoPage ~ res.then ~ response:", response)
      // Si hay sesion, no se hace nada
      this.aventones=response.data;
      console.log("🚀 ~ file: feed.page.ts:31 ~ FeedPage ~ res.then ~ this.aventones:", this.aventones)
    
    }).catch((error) => {
      console.log(error.response.status);
      console.log("🚀 ~ file: inicio-sesion.page.ts:103 ~ InicioSesionPage ~ res.then ~ error:", error)
      if(error.response.status==401) //si si 401 entonces nos pide inicio de sesion
      this.router.navigate(["inicio-sesion"])
    }) 
  }

  verNoSesion(){
    const res = this.feedService.verNoSesion();
    res.then((response) => {
            // Si hay sesion, no se hace nada
    }).catch((error) => {
      console.log(error.response.status);
      console.log("🚀 ~ file: inicio-sesion.page.ts:103 ~ InicioSesionPage ~ res.then ~ error:", error)
      if(error.response.status==401) //si si 401 entonces nos pide inicio de sesion
      this.router.navigate(["inicio-sesion"])
    })
  }

  cerrarSesion(){
    this.feedService.cerrarSesion();
  }

  solicitarAventon(aventon_id:any){
    const res = this.feedService.solicitarAventon(this.user_id, this.destino_id, aventon_id)
    res.then((response) => {
      console.log("🚀 ~ file: feed.page.ts:81 ~ FeedPage ~ res.then ~ response:", response)
      // Si hay sesion, no se hace nada
    }).catch((error) => {
      console.log(error.response.status);
      console.log("🚀 ~ file: inicio-sesion.page.ts:103 ~ InicioSesionPage ~ res.then ~ error:", error)
      if(error.response.status==401) //si si 401 entonces nos pide inicio de sesion
      this.router.navigate(["inicio-sesion"])
    })
  }
  confirmaSolicitud(user_id:any, estado:any, aventon_id:any){
    // si 1 acepta que se una, si 2 rechaza solicitud
    // console.log("🚀 ", estado)
    const res = this.feedService.aceptarAventon(user_id, estado, aventon_id)
    res.then((response) => {
      console.log("🚀 ~ file: feed.page.ts:81 ~ FeedPage ~ res.then ~ response:", response)
      this.getAventones()
      // Si hay sesion, no se hace nada
      // location.reload();
    }).catch((error) => {
      console.log(error.response.status);
      console.log("🚀 ~ file: inicio-sesion.page.ts:103 ~ InicioSesionPage ~ res.then ~ error:", error)
      if(error.response.status==401) //si si 401 entonces nos pide inicio de sesion
      this.router.navigate(["inicio-sesion"])
    })
  }
}











