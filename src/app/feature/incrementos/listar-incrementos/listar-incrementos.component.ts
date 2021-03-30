import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Incremento } from 'src/app/shared/model/incremento';
import { IncrementoService } from 'src/app/shared/service/incremento.service';

@Component({
  selector: 'app-listar-incrementos',
  templateUrl: './listar-incrementos.component.html',
})
export class ListarIncrementosComponent implements OnInit {
  incrementos: Incremento[] = [];
  constructor(private incrementoService: IncrementoService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.incrementoService.obtenerIncrementos().subscribe(
      (incrementos) => {
        this.incrementos = incrementos;
      },
      (err) => {
        this.toastr.error(err.error.mensaje, 'Fallo al intentar cargar incrementos', {timeOut: 3000});
      }
    );
  }

  eliminarIncremento(id: string): void {
    this.incrementoService.eliminarIncrementoPorId(id).subscribe(
      data => {
      this.toastr.success('Incremento Eliminado', 'OK', {timeOut: 3000});
      this.ngOnInit();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fallo al intentar Eliminar', {timeOut: 3000});
      }
    );
  }
}
