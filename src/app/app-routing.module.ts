import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'registro',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'feed',
    loadChildren: () => import('./feed/feed.module').then( m => m.FeedPageModule)
  },
  {
    path: 'inicio-sesion',
    loadChildren: () => import('./inicio-sesion/inicio-sesion.module').then( m => m.InicioSesionPageModule)
  },
  {
    path: 'auto',
    loadChildren: () => import('./auto/auto.module').then( m => m.AutoPageModule)
  },
  {
    path: 'destinos',
    loadChildren: () => import('./destinos/destinos.module').then( m => m.DestinosPageModule)
  },
  {
    path: 'maps',
    loadChildren: () => import('./maps/maps.module').then( m => m.MapsPageModule)
  },
  {
    path: 'ver-auto',
    loadChildren: () => import('./ver-auto/ver-auto.module').then( m => m.VerAutoPageModule)
  },
  {
    path: 'edit-auto/:id',
    loadChildren: () => import('./edit-auto/edit-auto.module').then( m => m.EditAutoPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
