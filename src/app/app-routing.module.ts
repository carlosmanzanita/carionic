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
  {
    path: 'ver-destino/:id',
    loadChildren: () => import('./ver-destino/ver-destino.module').then( m => m.VerDestinoPageModule)
  },
  {
    path: 'modalidades',
    loadChildren: () => import('./modalidades/modalidades.module').then( m => m.ModalidadesPageModule)
  },
  {
    path: 'modalidad-pie',
    loadChildren: () => import('./modalidad-pie/modalidad-pie.module').then( m => m.ModalidadPiePageModule)
  },
  {
    path: 'modalidad-aventon',
    loadChildren: () => import('./modalidad-aventon/modalidad-aventon.module').then( m => m.ModalidadAventonPageModule)
  },
  {
    path: 'panico',
    loadChildren: () => import('./panico/panico.module').then( m => m.PanicoPageModule)
  },
  {
    path: 'codigoqr/:origen',
    loadChildren: () => import('./codigoqr/codigoqr.module').then( m => m.CodigoqrPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
