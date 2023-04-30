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

  public cargando:boolean = false;

  constructor(
    public router:Router,
    public inicioSesionService:InicioSesionService
  ) { }

  ngOnInit() {
    this.verSiSesion()
  }

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
      this.router.navigate(['feed']);
      
    }).catch((error) => {
      console.log("🚀 ~ error:", error)
      // console.error(error.response.status);
      // if(error.response.status == 422) 
      this.errores = error.response.data.errors;
    });

    console.log("🚀 ~ res:", res)
  }

  registro(){
    // Para redirigir a la pagina de inicio de sesion
    this.router.navigate(['registro']);
  }

  async startScan (){
    // Check camera permission
    // This is just a simple example, check out the better checks below
    await BarcodeScanner.checkPermission({ force: true });
  
    // make background of WebView transparent
    // note: if you are using ionic this might not be enough, check below
    BarcodeScanner.hideBackground();
  
    const result = await BarcodeScanner.startScan(); // start scanning and wait for a result
  
    // if the result has content
    if (result.hasContent) {
      console.log(result.content); // log the raw scanned content
      this.iniciosesion.url = result.content
    }
  };

    stopScan () {
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
  };

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
