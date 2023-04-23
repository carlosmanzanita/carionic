import { Router } from '@angular/router';
import { AutoService } from './auto.service';
import { Component, Injectable, OnInit } from '@angular/core';
import { Auto } from './auto';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.page.html',
  styleUrls: ['./auto.page.scss'],
})
export class AutoPage implements OnInit {

  public registroAuto:Auto = {
        placa:"",
        color:"",
        tipo:"-",
        marca:""
  }


  constructor(
    public  autoService:AutoService,
    public router:Router, 
  ) { }

  ngOnInit() {
    this.verNoSesion()
  }

  guardarAuto(){
    console.log(this.registroAuto);
    const res=this.autoService.guardarAuto(this.registroAuto)
    res.then((response) => {
      console.log("🚀 ~ file: auto.page.ts:34 ~ AutoPage ~ res.then ~ response:", response)
      // Si hay sesion, no se hace nada
    }).catch((error) => {
      console.log(error.response.status);
      console.log("🚀 ~ file: inicio-sesion.page.ts:103 ~ InicioSesionPage ~ res.then ~ error:", error)
      if(error.response.status==401) //si si 401 entonces nos pide inicio de sesion
      this.router.navigate(["inicio-sesion"])
    }) 
  }

  verNoSesion(){
    const res = this.autoService.verNoSesion();
    res.then((response) => {
            // Si hay sesion, no se hace nada
    }).catch((error) => {
      console.log(error.response.status);
      console.log("🚀 ~ file: inicio-sesion.page.ts:103 ~ InicioSesionPage ~ res.then ~ error:", error)
      if(error.response.status==401) //si si 401 entonces nos pide inicio de sesion
      this.router.navigate(["inicio-sesion"])
    })
  }


}
