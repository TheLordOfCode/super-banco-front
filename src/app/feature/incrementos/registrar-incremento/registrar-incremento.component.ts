import { DatePipe } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Incremento } from 'src/app/shared/model/incremento';
import { ErroresService } from 'src/app/shared/service/errores.service';
import { IncrementoService } from 'src/app/shared/service/incremento.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-registrar-incremento',
  templateUrl: './registrar-incremento.component.html',
  providers: [DatePipe],
})
export class RegistrarIncrementoComponent implements OnInit {
  showAlertSuccess = false;

  message = '';
  formularioIncremento: FormGroup;
  id: string;
  incrementoActual: Incremento;
  fecha: NgbDateStruct;
  constructor(
    private activatedRoute: ActivatedRoute,
    private incrementoService: IncrementoService,
    public erroresService: ErroresService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.formularioIncremento = this.incrementoService.construirFormulario();
    this.activatedRoute.params.subscribe((params) => {
      this.id = params.id;
      if (this.id) {
        this.incrementoService
          .obtenerIncrementoPorId(this.id)
          .subscribe((incrementoActual) => {
            this.incrementoActual = incrementoActual;
            this.updateFormIncremento();
          });
      }
    });
  }

  public get hayId(): boolean {
    return this.id !== null && this.id !== undefined;
  }

  clickSaveOrEditIncremento(): void {
    this.showAlertSuccess = false;
    if (this.formularioIncremento.valid) {
      
      this.validateSaveOrEdit();
    }
  }

  validateSaveOrEdit(): void {
    if (this.hayId) {
      this.incrementoService
        .actualizarIncremento(this.id, this.formularioIncremento.value)
        .subscribe(
          (mensaje: string) => {
            this.message = mensaje;
            this.toastr.success('Incremento Actualizado', 'OK', { timeOut: 3000 });
            this.mostrarAlertaExitosa();
          },
          (error) => {
            this.toastr.error(error.error.mensaje, 'Error', { timeOut: 3000 });
          }
        );
        
    } else {
      this.incrementoService
        .guardarIncremento(this.formularioIncremento.value)
        .subscribe(
          (mensaje: any) => {
            this.message = mensaje;
            this.toastr.success('Incremento guardado, el monto final es: ' + mensaje.montoFinal, 'OK', { timeOut: 6000 });
            this.mostrarAlertaExitosa();
            this.reset();
          },
          (error) => {
            this.toastr.error(error.error.mensaje, 'Error', { timeOut: 3000 });
          }
        );
    }
  }

  updateFormIncremento(): void {
    this.formularioIncremento.get('fechaInicio').setValue(this.incrementoActual.fechaInicio);
    this.formularioIncremento.get('fechaFin').setValue(this.incrementoActual.fechaFin);
    this.formularioIncremento.get('montoInicial').setValue(this.incrementoActual.montoInicial);
  }

  getPersonFormGroup(): FormGroup {
    return this.formularioIncremento.get('increment') as FormGroup;
  }

  reset(): void {
    this.formularioIncremento.reset();
  }

  closeAlerts(): void {
    this.showAlertSuccess = false;
  }

  mostrarAlertaExitosa(): void {
    this.showAlertSuccess = true;
  }
}
