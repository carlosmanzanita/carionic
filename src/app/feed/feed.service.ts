import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  private ip = localStorage.getItem('ip')

  private apiVer = `http://${this.ip}/api/auth/ver-sesion`;
  private apiCerrar = `http://${this.ip}/api/auth/cerrar-sesion`;
  private apiAventon =`http://${this.ip}/api/aventon` ;
  private apiPie =`http://${this.ip}/api/pie` ;


  constructor(
    public router:Router,
  ) { }

  // ++++++++++++++++++++++++++++ SECCIÓN AVENTÓN +++++++++++++++++++

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
    let res = await axios.get(this.apiAventon,config)
    return res;
}

async solicitarAventon(user_id:any, destino_id:any, aventon_id:any){
  // obtenemos el token de localStorage
  const token = localStorage.getItem('token')
  // asignamos el token a la validacion para comprobar si existe una sesion
  const config = {
      headers:{
        'Content-Type': 'application/json',
        Authorization: 'Bearer '+token 
      }
    }
    
    const data = {
      user_id:user_id,
      destino_id:destino_id
    };
    
    //pertición http a la URI de laravel
    let res = await axios.put(`http://${this.ip}/api/aventon/${aventon_id}`, data, config)
    return res;
  }
  
  async aceptarAventon(user_id:any, estado:any, aventon_id:any){
    // obtenemos el token de localStorage
    const token = localStorage.getItem('token')
    // asignamos el token a la validacion para comprobar si existe una sesion
    const config = {
      headers:{
        'Content-Type': 'application/json',
        Authorization: 'Bearer '+token 
      }
    }
    
    const data = {
      user_id:user_id,
      estado:estado
    };
    
    //pertición http a la URI de laravel
    let res = await axios.put(`http://${this.ip}/api/confirma-solicitud/${aventon_id}`, data, config)
    return res;
  }
  
  async bajaAventon(aventon_id:any){
    // obtenemos el token de localStorage
    const token = localStorage.getItem('token')
    // asignamos el token a la validacion para comprobar si existe una sesion
    const config = {
      headers:{
        'Content-Type': 'application/json',
        Authorization: 'Bearer '+token 
      }
    };
    
    //pertición http a la URI de laravel
    let res = await axios.delete(`http://${this.ip}/api/aventon/${aventon_id}`, config)
    return res;
  }

  //++++++++++++++++++++++++++++ PIES +++++++++++++++++++++++++++++
  
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

  async solicitarPie(user_id:any, destino_id:any, pie_id:any){
  // obtenemos el token de localStorage
  const token = localStorage.getItem('token')
  // asignamos el token a la validacion para comprobar si existe una sesion
  const config = {
      headers:{
        'Content-Type': 'application/json',
        Authorization: 'Bearer '+token 
      }
    }
    
    const data = {
      user_id:user_id,
      destino_id:destino_id
    };
    
    //pertición http a la URI de laravel
    let res = await axios.put(`http://${this.ip}/api/pie/${pie_id}`, data, config)
    return res;
  }
  
  async aceptarPie(user_id:any, estado:any, pie_id:any){
    // obtenemos el token de localStorage
    const token = localStorage.getItem('token')
    // asignamos el token a la validacion para comprobar si existe una sesion
    const config = {
      headers:{
        'Content-Type': 'application/json',
        Authorization: 'Bearer '+token 
      }
    }
    
    const data = {
      user_id:user_id,
      estado:estado
    };
    
    //pertición http a la URI de laravel
    let res = await axios.put(`http://${this.ip}/api/confirma-solicitud/${pie_id}`, data, config)
    return res;
  }
  
  async bajaPie(pie_id:any){
    // obtenemos el token de localStorage
    const token = localStorage.getItem('token')
    // asignamos el token a la validacion para comprobar si existe una sesion
    const config = {
      headers:{
        'Content-Type': 'application/json',
        Authorization: 'Bearer '+token 
      }
    };
    
    //pertición http a la URI de laravel
    let res = await axios.delete(`http://${this.ip}/api/pie/${pie_id}`, config)
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
    let res = await axios.get(this.apiVer,config)
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

  async botonPanico(user_id:any, latitud:any, longitud:any){
    // obtenemos el token de localStorage
    const token = localStorage.getItem('token')
    // asignamos el token a la validacion para comprobar si existe una sesion
    const config = {
      headers:{
        'Content-Type': 'application/json',
        Authorization: 'Bearer '+token 
      }
    }
    
    const data = {
      user_id:user_id,
      latitud:latitud,
      longitud:longitud,
    };
    //pertición http a la URI de laravel
    let res = await axios.put(`http://${this.ip}/api/activacion-panico`, data, config)
    return res;
  }
  async panicosActivados(){
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
    let res = await axios.get(`http://${this.ip}/api/panicos-activados`, config)
    return res;
  }
  
}
