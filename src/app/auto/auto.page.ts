import { Router } from '@angular/router';
import { AutoService } from './auto.service';
import { Component, OnInit } from '@angular/core';
import { publicDecrypt } from 'crypto';
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
        tipo:"",
        marca:""
  }
  
  // public errores:AutoPage = {
  //   placa:"",
  //   color:"",
  //   tipo:"",
  //   marca:""
  // }

  constructor(
  public  autoService:AutoService,
  public router:Router, 
  ) { }

  ngOnInit() {
    this.verNoSesion()
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
