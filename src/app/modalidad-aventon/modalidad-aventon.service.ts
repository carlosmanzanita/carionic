import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ModalidadAventon } from './modalidad-aventon';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ModalidadAventonService {

  private apiAventon ="http://carpool.test/api/aventon" ;
  private apiCerrar = "http://carpool.test/api/auth/cerrar-sesion";
  private apiEncuentro = "http://carpool.test/api/encuentro";
  private apiDestino="http://carpool.test/api/destino";
  private apiAuto ="http://carpool.test/api/autos";
  private apiAventonTag ="http://carpool.test/api/aventon-tag";
  private apiModalidad ="http://carpool.test/api/modalidades";

  constructor(
    public router:Router,

  ) { }


  async getAventones(){
    // obtenemos el token de localStorage
    const token = localStorage.getItem('token')
    // asignamos el token a la validacion para comprobar si existe una sesion
    const config = {
      headers:{
        'Content-Type': 'application/json',
        Authorization: 'Bearer '+token 
      }
    }
    //pertición http a la URI de laravel
    let res = await axios.get(this.apiAventon,config)
    return res;
  }
  
  async guardarAventon(postAventon:ModalidadAventon){
    // obtenemos el token de localStorage
    const token = localStorage.getItem('token')
    // asignamos el token a la validacion para comprobar si existe una sesion
    const config = {
      headers:{
        'Content-Type': 'application/json',
        Authorization: 'Bearer '+token 
      }
    }
    //pertición http a la URI de laravel
    let res = await axios.post(this.apiAventon, postAventon,config)
    return res;
  }  

  async getAventonTag(){
    // obtenemos el token de localStorage
    const token = localStorage.getItem('token')
    // asignamos el token a la validacion para comprobar si existe una sesion
    const config = {
      headers:{
        'Content-Type': 'application/json',
        Authorization: 'Bearer '+token 
      }
    }
    //pertición http a la URI de laravel
    let res = await axios.get(this.apiAventonTag,config)
    return res;
  }
  
  async getEncuentro(){
    // obtenemos el token de localStorage
    const token = localStorage.getItem('token')
    // asignamos el token a la validacion para comprobar si existe una sesion
    const config = {
      headers:{
        'Content-Type': 'application/json',
        Authorization: 'Bearer '+token 
      }
    }
    //pertición http a la URI de laravel
    let res = await axios.get(this.apiEncuentro,config)
    return res;
  }
  async getDestinos(){
    // obtenemos el token de localStorage
    const token = localStorage.getItem('token')
    // asignamos el token a la validacion para comprobar si existe una sesion
    const config = {
      headers:{
        'Content-Type': 'application/json',
        Authorization: 'Bearer '+token 
      }
    }
    //pertición http a la URI de laravel
    let res = await axios.get(this.apiDestino,config)
    return res;
}
    async getAutos(){
      // obtenemos el token de localStorage
      const token = localStorage.getItem('token')
      // asignamos el token a la validacion para comprobar si existe una sesion
      const config = {
        headers:{
          'Content-Type': 'application/json',
          Authorization: 'Bearer '+token 
        }
      }
      //pertición http a la URI de laravel
      let res = await axios.get(this.apiAuto,config)
      return res;
    }


      async getModalidad(){
      // obtenemos el token de localStorage
      const token = localStorage.getItem('token')
      // asignamos el token a la validacion para comprobar si existe una sesion
      const config = {
        headers:{
          'Content-Type': 'application/json',
          Authorization: 'Bearer '+token 
        }
      }
      //pertición http a la URI de laravel
      let res = await axios.get(this.apiModalidad,config)
      return res;
    }
    
    async cerrarSesion(){
      // obtenemos el token de localStorage
      const token = localStorage.getItem('token')
      // asignamos el token a la validacion para comprobar si existe una sesion
      const config = {
        headers:{
          'Content-Type': 'application/json',
          Authorization: 'Bearer '+token 
        }
      }
      //pertición http a la URI de laravel
      let res = await axios.get(this.apiCerrar,config)
      this.router.navigate(["inicio-sesion"])
      return res;
    }

    async verNoSesion(){
      // obtenemos el token de localStorage
      const token = localStorage.getItem('token')
      // asignamos el token a la validacion para comprobar si existe una sesion
      const config = {
        headers:{
          'Content-Type': 'application/json',
          Authorization: 'Bearer '+token 
        }
      }
      //pertición http a la URI de laravel
      let res = await axios.get(this.apiAventon,config)
      return res;
    }
  }
  