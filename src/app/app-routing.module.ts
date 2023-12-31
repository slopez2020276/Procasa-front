import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { UbicacionesComponent } from './componentes/ubicaciones/ubicaciones.component';
import { QuieroComprarComponent } from './componentes/quiero-comprar/quiero-comprar.component';
import { AdminloginComponent } from './componentes/adminlogin/adminlogin.component';
import { AdminUbicacionesComponent } from './componentes/admin-ubicaciones/admin-ubicaciones.component';
import { AdminprincipalComponent } from './componentes/adminprincipal/adminprincipal.component';

const routes: Routes = [
  {path:'',title:'Inicio',component:PrincipalComponent},
  {path:'ubicaciones',title:'Ubicaciones',component:UbicacionesComponent},
  {path:'quiero-comprar',title:'Quiero Comprar',component:QuieroComprarComponent},
  {path:'admin',title:'Administrador', component: AdminloginComponent},
  {path:'admin/admin-Ubicaciones',title:'Administrador-Ubicaciones', component:AdminUbicacionesComponent},
  {path:'admin/Principal',title:'Principal-Admin',component:AdminprincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
