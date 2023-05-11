import { VerAutoService } from './../ver-auto/ver-auto.service';
import { Router } from '@angular/router';
import { ModalidadPieService } from './../modalidad-pie/modalidad-pie.service';
import { Component, OnInit } from '@angular/core';
import { DestinosService } from '../destinos/destinos.service';
import { ModalidadAventon } from './modalidad-aventon';
import { ModalidadAventonService } from './modalidad-aventon.service';

@Component({
  selector: 'app-modalidad-aventon',
  templateUrl: './modalidad-aventon.page.html',
  styleUrls: ['./modalidad-aventon.page.scss'],
})
export class ModalidadAventonPage implements OnInit {

  public encuentro_id:any = 0
  public encuentro:any = []
  public destinos:any=[]
  public Carros:any=[]
  public aventonTag: any = []

  public posAventon:ModalidadAventon = {
    asientos:"",
    confirmar_id:"",
    user_id:"",
    encuentro_id:"",
    destino_id:"",
    auto_id:"",
    modalidad_id:""
  }

  constructor(
    public modalidadAventon:ModalidadAventonService,
    public modalidadPieService:ModalidadPieService,
    public destinosService:DestinosService,
    public verAutoService:VerAutoService,
    public router:Router,
    ) { }

  ngOnInit() {
  this.getEncuentro();
  this.getDestinos();
  this.getVehiculos();
  this.postAventon();
}

postAventon(){
  console.log(this.posAventon);
  const res=this.modalidadAventon.guardarAventon(this.posAventon)
  res.then((response) => {
    console.log("🚀 ~ file: modalidad-aventon.page.ts:51 ~ ModalidadAventonPage ~ res.then ~ response:", response)
    this.router.navigate(["modalidad-aventon"])
    // Si hay sesion, no se hace nada
  }).catch((error) => {
    console.log(error.response.status);
    console.log("🚀 ~ file: inicio-sesion.page.ts:103 ~ InicioSesionPage ~ res.then ~ error:", error)
    if(error.response.status==401) //si si 401 entonces nos pide inicio de sesion
    this.router.navigate(["inicio-sesion"])
  }) 
}
 //PARA TAG 
getAventonTag(){
  const aventontag_id = this.router.url.split('?')[0].split('/').pop()
  this.aventonTag=aventontag_id
  const res=this.modalidadPieService.getEncuentro(aventontag_id);
  res.then((response) => {
    console.log("🚀 ~ file: auto.page.ts:34 ~ AutoPage ~ res.then ~ response:", response)
    // Si hay sesion, no se hace nada
    this.encuentro=response.data;
    console.log("🚀 ~ file: ver-auto.page.ts:29 ~ VerAutoPage ~ res.then ~ this.Carros:", this.encuentro)
  
  }).catch((error) => {
    console.log(error.response.status);
    console.log("🚀 ~ file: inicio-sesion.page.ts:103 ~ InicioSesionPage ~ res.then ~ error:", error)
    if(error.response.status==401) //si si 401 entonces nos pide inicio de sesion
    this.router.navigate(["inicio-sesion"])
  }) 

}

getEncuentro(){
  const encuentro_id = this.router.url.split('?')[0].split('/').pop()
  this.encuentro_id=encuentro_id
  const res=this.modalidadPieService.getEncuentro(encuentro_id);
  res.then((response) => {
    console.log("🚀 ~ file: auto.page.ts:34 ~ AutoPage ~ res.then ~ response:", response)
    // Si hay sesion, no se hace nada
    this.encuentro=response.data;
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
getVehiculos(){
  const res=this.verAutoService.getAutos();
  res.then((response) => {
    console.log("🚀 ~ file: auto.page.ts:34 ~ AutoPage ~ res.then ~ response:", response)
    // Si hay sesion, no se hace nada
    this.Carros=response.data;
    console.log("🚀 ~ file: ver-auto.page.ts:29 ~ VerAutoPage ~ res.then ~ this.Carros:", this.Carros)
  
  }).catch((error) => {
    console.log(error.response.status);
    console.log("🚀 ~ file: inicio-sesion.page.ts:103 ~ InicioSesionPage ~ res.then ~ error:", error)
    if(error.response.status==401) //si si 401 entonces nos pide inicio de sesion
    this.router.navigate(["inicio-sesion"])
  }) 
}
}
