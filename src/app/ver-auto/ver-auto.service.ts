import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class VerAutoService {

  private apiAuto = "http://carpool.test/api/autos";

  constructor() { }
  
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
    let res = await axios.get(this.apiAuto + "/"+auto_id,config)
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
    let res = await axios.delete(this.apiAuto + "/"+auto_id,config)
    return res;
  }
  



}
