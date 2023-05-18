import { DestinosService } from './../destinos/destinos.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalidadPieService } from './modalidad-pie.service';
import { ModalidadPie } from './modalidad-pie';

@Component({
  selector: 'app-modalidad-pie',
  templateUrl: './modalidad-pie.page.html',
  styleUrls: ['./modalidad-pie.page.scss'],
})
export class ModalidadPiePage implements OnInit {

  public encuentro_id:any = 0
  public encuentro:any = []
  public destinos:any=[]
  public tagSeleccion: any = ''

  public posPie:ModalidadPie = {
    tags:new Set(),
    encuentro_id:"",
    destino_id:"",
  }

  constructor(
    public modalidadPieService:ModalidadPieService,
    public router:Router,
    public destinosService:DestinosService,
  ) { }

  ngOnInit() {
    this.getEncuentro();
    this.getDestinos();
    this.getPieTag();

  }

  getEncuentro(){
    const encuentro_id = this.router.url.split('?')[0].split('/').pop()
    this.encuentro_id=encuentro_id
    const res=this.modalidadPieService.getEncuentro(encuentro_id);
    res.then((response) => {
      console.log("🚀 ~ file: modalidad-pie.page.ts:35 ~ ModalidadPiePage ~ res.then ~ response:", response)
      // Si hay sesion, no se hace nada
      this.encuentro=response.data;
      console.log("🚀 ~ file: modalidad-pie.page.ts:38 ~ ModalidadPiePage ~ res.then ~ response:", response)
    
    }).catch((error) => {
      console.log(error.response.status);
      console.log("🚀 ~ file: inicio-sesion.page.ts:103 ~ InicioSesionPage ~ res.then ~ error:", error)
      if(error.response.status==401) //si si 401 entonces nos pide inicio de sesion
      this.router.navigate(["inicio-sesion"])
    }) 
  
  }
  getPieTag(){
    const res=this.modalidadPieService.getTags();
    res.then((response) => {
      console.log("🚀 ~ file: auto.page.ts:34 ~ AutoPage ~ res.then ~ response:", response)
      // Si hay sesion, no se hace nada
      this.getPieTag=response.data;
      console.log("🚀 ~ file: ver-auto.page.ts:29 ~ VerAutoPage ~ res.then ~ this.Carros:", this.encuentro)
    
    }).catch((error) => {
      console.log(error.response.status);
      console.log("🚀 ~ file: inicio-sesion.page.ts:103 ~ InicioSesionPage ~ res.then ~ error:", error)
      if(error.response.status==401) //si si 401 entonces nos pide inicio de sesion
      this.router.navigate(["inicio-sesion"])
    }) 
  
  }

  getDestinos(){
    const res=this.destinosService.getDestinos();
    res.then((response) => {
      console.log("🚀 ~ file: auto.page.ts:34 ~ AutoPage ~ res.then ~ response:", response)
      this.destinos=response.data
      console.log("🚀 ~ file: modalidad-pie.page.ts:52 ~ ModalidadPiePage ~ res.then ~ response:",response)
      // Si hay sesion, no se hace nada
    }).catch((error) => {
      console.log(error.response.status);
      console.log("🚀 ~ file: inicio-sesion.page.ts:103 ~ InicioSesionPage ~ res.then ~ error:", error)
      if(error.response.status==401) //si si 401 entonces nos pide inicio de sesion
      this.router.navigate(["inicio-sesion"])
    }) 
  }

  setTags(){
    console.log(this.tagSeleccion);
    this.posPie.tags.add(this.tagSeleccion)
    console.log(this.posPie.tags);
  }
  
  removeTag(tag:any){
    console.log(tag);
    this.posPie.tags.delete(tag)
    console.log(this.posPie.tags);
  }

}
