import { Router } from '@angular/router';
import { VerAutoService } from './ver-auto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-auto',
  templateUrl: './ver-auto.page.html',
  styleUrls: ['./ver-auto.page.scss'],
})
export class VerAutoPage implements OnInit {

  constructor(
    public verAutoService:VerAutoService,
    public router:Router
  ) { }

  ngOnInit() {
    this.getVehiculos();
  }

  getVehiculos(){
    const res=this.verAutoService.getAutos();
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
  
}
