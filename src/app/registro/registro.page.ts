import { Router } from '@angular/router';
import { RegistroService } from './registro.service';
import { Component, OnInit } from '@angular/core';
import { Registro } from './registro';

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

  public cargando:boolean = false;

  constructor(
    public router:Router,
    public registroService:RegistroService
  ) { }

  ngOnInit() {
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
      this.router.navigate(['feed']);
      
    }).catch((error) => {
      console.log("🚀 ~ error:", error)
      // console.error(error.response.status);
      // if(error.response.status == 422) 
      this.errores = error.response.data.errors;
    });

    console.log("🚀 ~ res:", res)
  }

}
