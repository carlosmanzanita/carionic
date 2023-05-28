import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { Auto } from './auto';

@Injectable({
  providedIn: 'root'
})
export class AutoService {

  private ip = localStorage.getItem('ip')

  private apiVer = `http://${this.ip}/api/auth/ver-sesion`;
  private apiAuto = `http://${this.ip}/api/autos`;
  private apiCerrar = `http://${this.ip}/api/auth/cerrar-sesion`;

  constructor(
    public router:Router,
  ) { }

  
  async guardarAuto(registroAuto:Auto){
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
        let res = await axios.post(this.apiAuto, registroAuto,config)
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
        let res = await axios.get(this.apiVer,config)
        return res;
      }

      
    }
    
    