import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsumoApiComponent } from './consumo-api/consumo-api.component';

const routes: Routes = [
  {
    path:'consumo',
    loadChildren: () => import('./consumo-api/consumo-route/consumo-route.module').then((m) => m.ConsumoRouteModule)
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'consumo'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
