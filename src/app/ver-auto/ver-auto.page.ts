import { Router } from '@angular/router';
import { VerAutoService } from './ver-auto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-auto',
  templateUrl: './ver-auto.page.html',
  styleUrls: ['./ver-auto.page.scss'],
})
export class VerAutoPage implements OnInit {

  public Carros:any = []

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
      this.Carros=response.data;
      console.log("🚀 ~ file: ver-auto.page.ts:29 ~ VerAutoPage ~ res.then ~ this.Carros:", this.Carros)
    
    }).catch((error) => {
      console.log(error.response.status);
      console.log("🚀 ~ file: inicio-sesion.page.ts:103 ~ InicioSesionPage ~ res.then ~ error:", error)
      if(error.response.status==401) //si si 401 entonces nos pide inicio de sesion
      this.router.navigate(["inicio-sesion"])
    }) 
  }


  editar(auto_id:any){
    this.router.navigate(["edit-auto", auto_id]);
  }
  eliminar(auto_id:any){
    if(confirm("¿Deseas eliminar el vehículo?")){
      const res=this.verAutoService.deleteAuto(auto_id);
      res.then((response) => {
        this.getVehiculos()
      }).catch((error) => {
        console.log(error.response.status);
        console.log("🚀 ~ file: ver-auto.page.ts:50 ~ VerAutoPage ~ res.then ~ console:", console)
        if(error.response.status==401) //si si 401 entonces nos pide inicio de sesion
        this.router.navigate(["inicio-sesion"])
      })
    }
  } 
  
}
