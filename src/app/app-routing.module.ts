import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/login/login.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { TopbarComponent } from './dashboard/topbar/topbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NoencontradoComponent } from './noencontrado/noencontrado.component';


//esto es un array de Roytes(rutas)
const routes: Routes = [

  {
    path: '', pathMatch: 'full', redirectTo: '/login'
  },

  {
    path:'login', component:LoginComponent
  },
  /* agregar ruta para dashboard */
  // {
  //   path:'dashboard', component:NavbarComponent
  // },
  {
    path:'dashboard', component: DashboardComponent
  },

  {
    path: '**', component: NoencontradoComponent
  }


];


@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
