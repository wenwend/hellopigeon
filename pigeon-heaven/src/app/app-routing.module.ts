import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PigeonsComponent } from './pigeons/pigeons.component';

const routes: Routes =[
{path:'pigeons',component:PigeonsComponent}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
