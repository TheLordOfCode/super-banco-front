import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { CoreModule } from 'src/app/core/core.module';
import { ListarIncrementosComponent } from './listar-incrementos/listar-incrementos.component';
import { IncrementosComponent } from './incrementos.component';
import { RegistrarIncrementoComponent } from './registrar-incremento/registrar-incremento.component';
import { IncrementosRoutingModule } from './incrementos-routing.module';
import { NgbDatepickerModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [IncrementosComponent, ListarIncrementosComponent, RegistrarIncrementoComponent],
  imports: [
    CommonModule,
    CoreModule,
    IncrementosRoutingModule,
    NgbToastModule,
    ReactiveFormsModule,
    FormsModule,
    NgbDatepickerModule
  ]
})
export class IncrementosModule { }
