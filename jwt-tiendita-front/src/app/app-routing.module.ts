import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ProductoDetalleComponent } from './components/admin/producto-detalle/producto-detalle.component';
import { ProductoFormComponent } from './components/admin/producto-form/producto-form.component';
import { ProductoListComponent } from './components/admin/producto-list/producto-list.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';


const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'admin', component: ProductoListComponent, canActivate:[AuthGuard]},
  {path:'registro', component: RegistroComponent},
  {path:'login', component: LoginComponent},
  {path:'producto-form', component: ProductoFormComponent},
  {path:'producto-detalle', component: ProductoDetalleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
