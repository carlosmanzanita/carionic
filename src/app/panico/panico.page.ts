import { Component, OnInit } from '@angular/core';
import { PanicoService } from './panico.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panico',
  templateUrl: './panico.page.html',
  styleUrls: ['./panico.page.scss'],
})
export class PanicoPage implements OnInit {

  public panicos:any = [];

  constructor(
    public panicoService:PanicoService,
    public router:Router,
  ) { }

  ngOnInit() {
    this.getPanicos()
  }

  getPanicos(){
    console.log("getPanicos");
    const res = this.panicoService.panicosActivados()
    res.then((response) => {
        // 'panicos_activados', 'mis_panicos_activados'
      this.panicos = response.data.panicos_activados;
      console.log("🚀 ~ file: panico.page.ts:27 ~ PanicoPage ~ res.then ~ this.panicos:", this.panicos)
    }).catch((error) => {
      if(error.response.status==401) //si si 401 entonces nos pide inicio de sesion
      this.router.navigate(["inicio-sesion"])
    })
  }

}
