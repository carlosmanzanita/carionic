import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ModalidadPie } from './modalidad-pie';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ModalidadPieService {
  private apiPie = "http://carpool.test/api/pie";
  private apiCerrar = "http://carpool.test/api/auth/cerrar-sesion";
  private apiEncuentro = "http://carpool.test/api/encuentro";
  private apiDestino="http://carpool.test/api/destino";
  private apiPieTags = "http://carpool.test/api/pie-tag";
  private apiTags = "http://carpool.test/api/tags";

  constructor(
    public router:Router,
  ) { }

  async getPies(){
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
    let res = await axios.get(this.apiPie,config)
    return res;
  }
  
  
  async getPieTags(){
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
    let res = await axios.get(this.apiPieTags,config)
    return res;
  }

  
  async guardarPie(postPie:ModalidadPie){
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
    let res = await axios.post(this.apiPie, postPie,config)
    return res;
  }  

  async getTags(){
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
    let res = await axios.get(this.apiTags,config)
    return res;
  }

  
  
  async getEncuentro(encuentro_id:any){
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
    let res = await axios.get(this.apiEncuentro,config)
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

}
