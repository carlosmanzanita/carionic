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

  public aventones:any= []
  public pies:any =[]

  constructor(
    public router:Router,
    public feedService:FeedService,
    public modalidadAventonService:ModalidadAventonService,
    public modalidadPieService:ModalidadPieService
  ) { }

  ngOnInit() {
    this.getAventones()
    // this.verNoSesion()
  }

  getAventones(){
    const res=this.modalidadAventonService.getAventones();
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
}
