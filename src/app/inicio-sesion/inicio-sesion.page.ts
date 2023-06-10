import { Router } from '@angular/router';
import { InicioSesionService } from './inicio-sesion.service';
import { Component, OnInit } from '@angular/core';
import { InicioSesion } from './inicio-sesion';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage implements OnInit {

  public iniciosesion:InicioSesion = {
    email:"",
    url:""
  }

  public errores:InicioSesion = {
    email:"",
    url:""
  }

  public error_axios:any = {
    message:"",
  };

  public cargando:boolean = false;

  constructor(
    public router:Router,
    public inicioSesionService:InicioSesionService
  ) { }

  ngOnInit() {
    this.verSiSesion()
    this.verSiUrl()
  }

  verSiUrl(){
    const url = localStorage.getItem('url');
    if(url == undefined || url == "-"){
      localStorage.setItem('url', "-");
      console.log({url:"No hay papi"});
    }else{
      console.log({url:url});
      this.iniciosesion.url = url;
    }
  }

  async startScan (){
    this.router.navigate(["codigoqr/inicio-sesion"])
  };

  inicioSesionUsuario(){
    //este es para que salte la ranita
    this.cargando = true;

    // esta asignación limpia los errores
    this.errores = {
      email:"",
      url:""
    }

    //Enviamos la petición de registro al servicio
    const res = this.inicioSesionService.iniciosesionUsuario(this.iniciosesion)
    
    res.then((response) => {
      console.log("🚀 ~ file: inicio-sesion.page.ts:49 ~ InicioSesionPage ~ res.then ~ response:", response)
      // colocamos el token el LocalStorage
      localStorage.setItem('token', response.data.token)
      console.log("🚀 ~ file: inicio-sesion.page.ts:50 ~ InicioSesionPage ~ res.then ~ response:", response)
      //Matamos a la rana
      this.cargando = false;
      localStorage.setItem('url', "-");
      this.router.navigate(['feed']);
      
    }).catch((error) => {
      this.cargando = false;
      console.log("🚀 ~ error:", error)
      this.error_axios = error;
      this.errores = error.response.data.errors;
    });

    console.log("🚀 ~ res:", res)
  }

  registro(){
    // Para redirigir a la pagina de inicio de sesion
    this.router.navigate(['registro']);
  }

  verSiSesion(){
    const res = this.inicioSesionService.verSiSesion();
    res.then((response) => {
      console.log("🚀 ~ file: inicio-sesion.page.ts:98 ~ InicioSesionPage ~ res.then ~ response:", response)
      this.router.navigate(["feed"])
            
    }).catch((error) => {
      console.log("🚀 ~ file: inicio-sesion.page.ts:103 ~ InicioSesionPage ~ res.then ~ error:", error)
      if(error.response.status!=401) //si 401 entonces no se hace nada
      this.router.navigate(["feed"])
    })
  }
}
