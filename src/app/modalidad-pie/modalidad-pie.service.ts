import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ModalidadPie } from './modalidad-pie';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ModalidadPieService {

  private ip = localStorage.getItem('ip')

  private apiPie = `http://${this.ip}/api/pie`;
  private apiCerrar = `http://${this.ip}/api/auth/cerrar-sesion`;
  private apiEncuentro = `http://${this.ip}/api/encuentro`;
  private apiDestino=`http://${this.ip}/api/destino`;
  private apiPieTags = `http://${this.ip}/api/pie-tag`;
  private apiTags = `http://${this.ip}/api/tags`;

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
    let res = await axios.get(this.apiEncuentro,config)
    return res;
  }

}

