import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { RegistroService } from './registro.service';
import { Component, OnInit } from '@angular/core';
import { Registro } from './registro';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public registro:Registro = {
    email:"",
    telefono:"",
    url:""
  }

  public errores:Registro = {
    email:"",
    telefono:"",
    url:""
  }

  public error_axios:any = {
    message:"",
  };

  public cargando:boolean = false;
  // public ip_por_asignar:string = 'carpool.test';
  public ip_por_asignar:string = '174.138.42.115/APICarpool/public';
  
  constructor(
    public router:Router,
    public registroService:RegistroService,
    public alertController:AlertController,
  ) { }

  ngOnInit() {
    this.verSiSesion()
    this.setIp()
    this.verSiUrl()
    
  }

  verSiUrl(){
    const url = localStorage.getItem('url');
    if(url == undefined || url == "-"){
      localStorage.setItem('url', "-");
      console.log({url:"No hay papi"});
    }else{
      console.log({url:url});
      this.registro.url = url;
    }
  }
  
  setIp(){
    localStorage.setItem('ip',this.ip_por_asignar)
  }

  registroUsuario(){
    //este es para que salte la ranita
    this.cargando = true;

    // esta asignación limpia los errores
    this.errores = {
      email:"",
      telefono:"",
      url:""
    }

    //Enviamos la petición de registro al servicio
    const res = this.registroService.registroUsuario(this.registro)
    
    res.then((response) => {
      // colocamos el token el LocalStorage
      localStorage.setItem('token', response.data.token)
      //Matamos a la rana
      this.cargando = false;
      localStorage.setItem('url', "-");
      this.router.navigate(['feed']);
      
    }).catch((error) => {
      console.log("🚀 ~ error:", error)
      // console.error(error.response.status);
      // if(error.response.status == 422) 
      this.cargando = false;
      this.error_axios = error;
      this.presentAlert()
    });

    console.log("🚀 ~ res:", res)
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'No te puedes registrar',
      message: 'Verifica tus datos',
      buttons: ['OK'],
    });

    await alert.present();
  }

  inicioSesion(){
    // Para redirigir a la pagina de inicio de sesion
    this.router.navigate(['inicio-sesion']);
  }

  async startScan (){
    this.router.navigate(["codigoqr/registro"])
  };

  stopScan () {
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
  };

  verSiSesion(){
    const res = this.registroService.verSiSesion();
    res.then((response) => {
      console.log("🚀 ~ file: inicio-sesion.page.ts:95 ~ InicioSesionPage ~ res.then ~ response:", response)
      this.router.navigate(["feed"])
            
    }).catch((error) => {
      console.log("🚀 ~ file: inicio-sesion.page.ts:103 ~ InicioSesionPage ~ res.then ~ error:", error)
      if(error.response.status!=401) //si 401 entonces no se hace nada
      this.router.navigate(["feed"])
    })
  }
}
