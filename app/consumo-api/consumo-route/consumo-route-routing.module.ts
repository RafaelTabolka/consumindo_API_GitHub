import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsumoApiComponent } from '../consumo-api.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component:ConsumoApiComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsumoRouteRoutingModule { }
