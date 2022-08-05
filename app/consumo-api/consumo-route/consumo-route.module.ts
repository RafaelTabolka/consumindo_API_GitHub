import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsumoRouteRoutingModule } from './consumo-route-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConsumoRouteRoutingModule,
    HttpClientModule,
    MaterialModule
  ]
})
export class ConsumoRouteModule { }
