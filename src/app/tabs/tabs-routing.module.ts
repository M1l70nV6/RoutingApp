import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {//Instanciar la pagina hija Inicio
        path:"inicio",
        loadChildren: ()=>import("./inicio/inicio.module").then(hijo=>hijo.InicioPageModule)
      },
      {//Instanciar la pagina hija nudo
        path:"nudo/:id", // modificar nudo para recibir un id
        loadChildren: ()=>import("./nudo/nudo.module").then(hijo=>hijo.NudoPageModule)
      },
      {//Instanciar la pagina hija desenlace
        path:"desenlace",
        loadChildren: ()=>import("./desenlace/desenlace.module").then(hijo=>hijo.DesenlacePageModule)
      },
      {//Por defecto abrir inicio
        path:"",
        redirectTo:"inicio",
        pathMatch:"full"
      }
    ]
  },
  {//padre por defecto
    path:"",
    redirectTo:"tabs/inicio",
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
