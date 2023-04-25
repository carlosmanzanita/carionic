import { Router } from '@angular/router';
import { VerAutoService } from './../ver-auto/ver-auto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-auto',
  templateUrl: './edit-auto.page.html',
  styleUrls: ['./edit-auto.page.scss'],
})
export class EditAutoPage implements OnInit {

  public Carro:any = []
  public auto_id:any = 0

  constructor(
    public verAutoService:VerAutoService,
    public router:Router
  ) { }

  ngOnInit() {
    this.getVehiculos();
  }

  guardarAuto(){
    // console.log(this.registroAuto);
    const res=this.verAutoService.guardarAuto(this.Carro, this.auto_id)
    res.then((response) => {
      console.log("🚀 ~ file: auto.page.ts:34 ~ AutoPage ~ res.then ~ response:", response)
      this.router.navigate(["ver-auto"])
      // Si hay sesion, no se hace nada
    }).catch((error) => {
      console.log(error.response.status);
      console.log("🚀 ~ file: inicio-sesion.page.ts:103 ~ InicioSesionPage ~ res.then ~ error:", error)
      if(error.response.status==401) //si si 401 entonces nos pide inicio de sesion
      this.router.navigate(["inicio-sesion"])
    }) 
  }

  getVehiculos(){
    const auto_id = this.router.url.split('?')[0].split('/').pop()
    this.auto_id=auto_id
    const res=this.verAutoService.getAuto(auto_id);
    res.then((response) => {
      console.log("🚀 ~ file: auto.page.ts:34 ~ AutoPage ~ res.then ~ response:", response)
      // Si hay sesion, no se hace nada
      this.Carro=response.data;
      console.log("🚀 ~ file: ver-auto.page.ts:29 ~ VerAutoPage ~ res.then ~ this.Carros:", this.Carro)
    
    }).catch((error) => {
      console.log(error.response.status);
      console.log("🚀 ~ file: inicio-sesion.page.ts:103 ~ InicioSesionPage ~ res.then ~ error:", error)
      if(error.response.status==401) //si si 401 entonces nos pide inicio de sesion
      this.router.navigate(["inicio-sesion"])
    }) 
  
  }

}
