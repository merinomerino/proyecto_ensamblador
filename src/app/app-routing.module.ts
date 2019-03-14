import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InterfazComponent} from './interfaz/interfaz.component'


const routes: Routes = [
{path:'InterfazComponent',component:InterfazComponent},
{path:'**',component:InterfazComponent}//debe ir al final por las rutas que le siguen no funcionaran 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
