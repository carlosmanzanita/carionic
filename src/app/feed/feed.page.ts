import { FeedService } from './feed.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  constructor(
    public router:Router,
    public feedService:FeedService
  ) { }

  ngOnInit() {
    this.verNoSesion()
  }

  verNoSesion(){
    const res = this.feedService.verNoSesion();
    res.then((response) => {
            // Si hay sesion, no se hace nada
    }).catch((error) => {
      console.log(error.response.status);
      console.log("🚀 ~ file: inicio-sesion.page.ts:103 ~ InicioSesionPage ~ res.then ~ error:", error)
      if(error.response.status==401) //si si 401 entonces nos pide inicio de sesion
      this.router.navigate(["inicio-sesion"])
    })
  }

  cerrarSesion(){
    this.feedService.cerrarSesion();
  }
}
