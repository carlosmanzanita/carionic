import { ModalidadPieService } from './../modalidad-pie/modalidad-pie.service';
import { ModalidadAventonService } from './../modalidad-aventon/modalidad-aventon.service';
import { FeedService } from './feed.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { PanicoService } from '../panico/panico.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  public user_id:any = 0;
  public user_name:any = '';
  public destino_id:any = 0;
  public aventones:any= []
  public pies:any =[]
  public destinos:any =[]
  public panicos:any =[]
  public mis_panicos:any =[]
  
  constructor(
    public router:Router,
    public feedService:FeedService,
    public modalidadAventonService:ModalidadAventonService,
    public modalidadPieService:ModalidadPieService,
    public alertController:AlertController,
    public geolocation:Geolocation,
    public panicoService:PanicoService
  ) { }

  ngOnInit() {
    this.getAventones()
    this.getDestinosEmergentes()
    this.getPies()
    this.panicosActivados()
    setInterval(
      ()=>{
        this.panicosActivados()
      }
    , 120000);
  }

  getDestinosEmergentes(){
    const res = this.modalidadAventonService.getDestinos();
    res.then((response) => {
      this.destinos = response.data;
      // console.log("🚀 ~ file: feed.page.ts:37 ~ FeedPage ~ res.then ~ this.destinos:", this.destinos)
    
    }).catch((error) => {
      // console.log(error.response.status);
      // console.log("🚀 ~ file: inicio-sesion.page.ts:103 ~ InicioSesionPage ~ res.then ~ error:", error)
      if(error.response.status==401) //si si 401 entonces nos pide inicio de sesion
      this.router.navigate(["inicio-sesion"])
    }) 
  }

  getAventones(){
    this.aventones = [];
    const res=this.modalidadAventonService.getAventones();
    res.then((response) => {
      // console.log("🚀 ~ file: auto.page.ts:34 ~ AutoPage ~ res.then ~ response:", response)
      // Si hay sesion, no se hace nada
      this.aventones=response.data.aventones;
      this.user_id=response.data.user_id;
      this.user_name=response.data.user_name;
      // console.log(this.aventones);

      let soy_yo = 0;
      let muestra_solicitud = false;
      

      for(let a in this.aventones){
        muestra_solicitud = false;
        let solicitado = this.aventones[a].solicitando;
        for(let s in solicitado){
          if(solicitado[s].user_id == this.user_id){
            soy_yo++;
          }
        }
        if( soy_yo == 0 ){
          muestra_solicitud = true;
        }
        this.aventones[a].muestra_solicitud = muestra_solicitud;
      }
      console.log(this.aventones);
      
    }).catch((error) => {
      // console.log(error.response.status);
      // console.log("🚀 ~ file: inicio-sesion.page.ts:103 ~ InicioSesionPage ~ res.then ~ error:", error)
      if(error.response.status==401) //si si 401 entonces nos pide inicio de sesion
      this.router.navigate(["inicio-sesion"])
    }) 
  }
  getPies(){
    this.pies = [];
    const res=this.modalidadPieService.getPies();
    res.then((response) => {
      // console.log("🚀 ~ file: auto.page.ts:34 ~ AutoPage ~ res.then ~ response:", response)
      // Si hay sesion, no se hace nada
      this.pies=response.data.pies;
      this.user_id=response.data.user_id;
      this.user_name=response.data.user_name;
      
      console.log(this.pies);
      
    }).catch((error) => {
      // console.log(error.response.status);
      // console.log("🚀 ~ file: inicio-sesion.page.ts:103 ~ InicioSesionPage ~ res.then ~ error:", error)
      if(error.response.status==401) //si si 401 entonces nos pide inicio de sesion
      this.router.navigate(["inicio-sesion"])
    })
  }

  verNoSesion(){
    const res = this.feedService.verNoSesion();
    res.then((response) => {
            // Si hay sesion, no se hace nada
    }).catch((error) => {
      // console.log(error.response.status);
      // console.log("🚀 ~ file: inicio-sesion.page.ts:103 ~ InicioSesionPage ~ res.then ~ error:", error)
      if(error.response.status==401) //si si 401 entonces nos pide inicio de sesion
      this.router.navigate(["inicio-sesion"])
    })
  }

  cerrarSesion(){
    this.feedService.cerrarSesion();
  }

  solicitarAventon(aventon_id:any){
    const res = this.feedService.solicitarAventon(this.user_id, this.destino_id, aventon_id)
    res.then((response) => {
      // console.log("🚀 ~ file: feed.page.ts:81 ~ FeedPage ~ res.then ~ response:", response)
      // Si hay sesion, no se hace nada
      this.getAventones()
    }).catch((error) => {
      // console.log(error.response.status);
      // console.log("🚀 ~ file: inicio-sesion.page.ts:103 ~ InicioSesionPage ~ res.then ~ error:", error)
      if(error.response.status==401) //si si 401 entonces nos pide inicio de sesion
      this.router.navigate(["inicio-sesion"])
    })
  }
  confirmaSolicitud(user_id:any, estado:any, aventon_id:any){
    // si 1 acepta que se una, si 2 rechaza solicitud
    console.log("🚀 ", estado)
    const res = this.feedService.aceptarAventon(user_id, estado, aventon_id)
    res.then((response) => {
      // console.log("🚀 ~ file: feed.page.ts:81 ~ FeedPage ~ res.then ~ response:", response)
      this.getAventones()
      // Si hay sesion, no se hace nada
      // location.reload();
    }).catch((error) => {
      // console.log(error.response.status);
      // console.log("🚀 ~ file: inicio-sesion.page.ts:103 ~ InicioSesionPage ~ res.then ~ error:", error)
      if(error.response.status==401) //si si 401 entonces nos pide inicio de sesion
      this.router.navigate(["inicio-sesion"])
    })
  }
  terminarViamje(aventon_id:any){
    this.alertController.create({
      header: '¿Deseas terminar el viaje?',
      subHeader: 'Esta acción no se podrá deshacer',
      buttons: [
        {
          text: 'Aun no',
          handler: () => {
            console.log('Ta bien baboso');
          }
        },
        {
          text: 'Si, terminar',
          handler: () => {
            const res = this.feedService.bajaAventon(aventon_id);
            res.then((response) => {
              this.getAventones()
            }).catch((error) => {
              // console.log(error.response.status);
              // console.log("🚀 ~ file: inicio-sesion.page.ts:103 ~ InicioSesionPage ~ res.then ~ error:", error)
              if(error.response.status==401) //si si 401 entonces nos pide inicio de sesion
              this.router.navigate(["inicio-sesion"])
            })
          }
        }
      ]
    }).then(res => {
      res.present();
    });

  }
  nimodo(){

  }

 //+++++++++++++++++++++++++++ PIES +++++++++++++++++++++++++
 solicitarPie(pie_id:any){
  const res = this.feedService.solicitarPie(this.user_id, this.destino_id, pie_id)
  res.then((response) => {
    // console.log("🚀 ~ file: feed.page.ts:81 ~ FeedPage ~ res.then ~ response:", response)
    // Si hay sesion, no se hace nada
    this.getPies()
  }).catch((error) => {
    // console.log(error.response.status);
    // console.log("🚀 ~ file: inicio-sesion.page.ts:103 ~ InicioSesionPage ~ res.then ~ error:", error)
    if(error.response.status==401) //si si 401 entonces nos pide inicio de sesion
    this.router.navigate(["inicio-sesion"])
  })
}
  confirmarSolicitud(user_id:any, estado:any, pie_id:any){
    // si 1 acepta que se una, si 2 rechaza solicitud
    console.log("🚀 ", estado)
    const res = this.feedService.aceptarPie(user_id, estado, pie_id)
    res.then((response) => {
      // console.log("🚀 ~ file: feed.page.ts:81 ~ FeedPage ~ res.then ~ response:", response)
      this.getPies()
      // Si hay sesion, no se hace nada
      // location.reload();
    }).catch((error) => {
      // console.log(error.response.status);
      // console.log("🚀 ~ file: inicio-sesion.page.ts:103 ~ InicioSesionPage ~ res.then ~ error:", error)
      if(error.response.status==401) //si si 401 entonces nos pide inicio de sesion
      this.router.navigate(["inicio-sesion"])
    })
  }
  terminarViaje(pie_id:any){
    this.alertController.create({
      header: '¿Deseas terminar el viaje?',
      subHeader: 'Esta acción no se podrá deshacer',
      buttons: [
        {
          text: 'Aun no',
          handler: () => {
            console.log('Ta bien baboso');
          }
        },
        {
          text: 'Si, terminar',
          handler: () => {
            const res = this.feedService.bajaPie(pie_id);
            res.then((response) => {
              this.getPies()
            }).catch((error) => {
              // console.log(error.response.status);
              // console.log("🚀 ~ file: inicio-sesion.page.ts:103 ~ InicioSesionPage ~ res.then ~ error:", error)
              if(error.response.status==401) //si si 401 entonces nos pide inicio de sesion
              this.router.navigate(["inicio-sesion"])
            })
          }
        }
      ]
    }).then(res => {
      res.present();
  });
  }

  botonPanico(){
      this.alertController.create({
        header: '¿Te encuentras en peligro?',
        subHeader: 'Tus datos y ubicación serán enviados a todos los usuarios registrados',
        buttons: [
          {
            text: 'Toy bien',
            handler: () => {
              console.log('Ta bien baboso');
            }
          },
          {
            text: 'Me quiero volver chango',
            handler: () => {
              this.activarBotonPanico()
            }
          }
        ]
      }).then(res => {
        res.present();
      });
  }

  async activarBotonPanico(){
    console.log("Alguien será violado");
    const resp = await this.geolocation.getCurrentPosition();
    console.log("Coordenadas latitud: ", resp.coords.latitude);
    console.log("Coordenadas longitud: ", resp.coords.longitude);

    /** */
      const res = this.feedService.botonPanico(this.user_id, resp.coords.latitude, resp.coords.longitude);
      res.then((response) => {
        this.panicosActivados()
        console.warn("tapate para que no te violen");
      }).catch((error) => {
        // console.log(error.response.status);
        // console.log("🚀 ~ file: inicio-sesion.page.ts:103 ~ InicioSesionPage ~ res.then ~ error:", error)
        if(error.response.status==401) //si si 401 entonces nos pide inicio de sesion
        this.router.navigate(["inicio-sesion"])
      })
    /**/
  }
  async panicosActivados(){
    //Obtenemos todos los botones de pànico activados
      const res = this.feedService.panicosActivados();
      res.then((response) => {
        console.log("🚀 panicos activos", response)
        console.warn("A un vato lo estan violando, ayudalo");
        this.panicos = response.data.panicos_activados.length;
        this.mis_panicos = response.data.mis_panicos_activados;
        // 'panicos_activados', 'mis_panicos_activados'
        console.log("🚀 cuantos pánico", this.panicos)
      }).catch((error) => {
        if(error.response.status==401) //si si 401 entonces nos pide inicio de sesion
        this.router.navigate(["inicio-sesion"])
      })
    /**/
  }
  verPanicos(){
    console.log("podríamos ver los pánicos");
    this.router.navigate(["panico"])
  }
  quitarPanicos(){

    this.alertController.create({
      header: '¿Te encuentras bien?',
      subHeader: 'Se desactivaran todas tus alertas de pánico',
      buttons: [
        {
          text: 'Simon',
          handler: () => {
            const res = this.panicoService.quitarPanicos(this.user_id);
            res.then((response) => {
              this.panicosActivados()
            }).catch((error) => {
              if(error.response.status==401) //si si 401 entonces nos pide inicio de sesion
              this.router.navigate(["inicio-sesion"])
            })        
          }
        },
        {
          text: 'que te valga',
          handler: () => {
            console.log("le valio y se murio");
          }
        }
      ]
    }).then(res => {
      res.present();
    });

    
  }
}
