import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { FuturamaComponent } from './futurama/futurama.component';
import { Futurama2Component } from './futurama2/futurama2.component';
import { Futurama3Component } from './futurama3/futurama3.component';

export const routes: Routes = [
    {path: 'futurama-component2', component: Futurama2Component},
    {path: 'futurama/id', component: Futurama3Component}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutes { }  
