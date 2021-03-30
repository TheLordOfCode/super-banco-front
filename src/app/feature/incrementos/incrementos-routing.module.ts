import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarIncrementosComponent } from './listar-incrementos/listar-incrementos.component';
import { IncrementosComponent } from './incrementos.component';
import { RegistrarIncrementoComponent } from './registrar-incremento/registrar-incremento.component';

const routes: Routes = [
  {
    path: 'incrementos',
    component: IncrementosComponent,
    children: [
      { path: '', component: ListarIncrementosComponent },
      { path: 'registrar', component: RegistrarIncrementoComponent },
      { path: 'actualizar/:id', component: RegistrarIncrementoComponent },
    ],
  },
  { path: '', pathMatch: 'full', redirectTo: '/incrementos' },
  { path: '**', pathMatch: 'full', redirectTo: '/incrementos' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncrementosRoutingModule {}
