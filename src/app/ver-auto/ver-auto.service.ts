import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class VerAutoService {
  
  private ip = localStorage.getItem('ip')

  private apiAuto = `http://${this.ip}/api/autos`;
  private apiCerrar = `http://${this.ip}/api/auth/cerrar-sesion`;


  constructor(
    public router:Router,
  ) { }
  
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

  async getAuto(auto_id:any){
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
    let res = await axios.get(this.apiAuto + "/"+ auto_id,config)
    return res;
  }
  
  async guardarAuto(registroAuto:any, auto_id:any ){
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
    let res = await axios.put(this.apiAuto + "/" + auto_id, registroAuto,config)
    return res;
  }

  async deleteAuto(auto_id:any){
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
    let res = await axios.delete(this.apiAuto + "/"+ auto_id,config)
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
