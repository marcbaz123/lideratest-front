import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PoliticasComponent } from './pages/politicas/politicas.component';
import { InicioComponent } from './pages/inicio/inicio.component';
const routes: Routes = [

  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'politicas', component: PoliticasComponent},
  {path: 'inicio', component: InicioComponent},
  {path: '**' , redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
