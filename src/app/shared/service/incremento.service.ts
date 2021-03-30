import { Injectable } from '@angular/core';
import { Incremento } from '../model/incremento';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class IncrementoService {

  apiIncrementos = environment.apiIncrementos;

  constructor( private httpClient: HttpClient) { }

  construirFormulario(): FormGroup {
    return new FormGroup({
      id: new FormControl(null),
      fechaInicio: new FormControl(null, Validators.required),
      fechaFin: new FormControl('', Validators.required),
      montoInicial: new FormControl('', Validators.required),
    });
  }

  obtenerIncrementos(): Observable<Incremento[]>{
    return this.httpClient.get<Incremento[]>(`${this.apiIncrementos}/incrementos`);
  }

  obtenerIncrementoPorId(id: string): Observable<Incremento>{
    return this.httpClient.get<Incremento>(`${this.apiIncrementos}/incrementos/${id}`);
  }

  guardarIncremento(incremento: Incremento): Observable<string>{
    return this.httpClient.post<string>(`${this.apiIncrementos}/incrementos`, incremento);
  }

  actualizarIncremento(id: string, incremento: Incremento): Observable<string>{
    return this.httpClient.put<string>(`${this.apiIncrementos}/incrementos/${id}`, incremento);
  }

  eliminarIncrementoPorId(id: string): Observable<Incremento[]>{
    return this.httpClient.delete<Incremento[]>(`${this.apiIncrementos}/incrementos/${id}`);
  }
}
