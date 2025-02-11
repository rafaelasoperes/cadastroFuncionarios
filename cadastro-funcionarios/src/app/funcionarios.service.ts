import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Funcionario, ApiResponse } from './models/funcionario.model';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  private titleSource = new BehaviorSubject<string>('Informações');
  currentTitle = this.titleSource.asObservable();

  // Método para definir o título
  setTitle(title: string) {
    this.titleSource.next(title);
  }

  getFuncionarios(): Observable<Funcionario[]> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/funcionarios`).pipe(
      map(response => response.result)
    );
  }

  getFuncionario(id: number): Observable<Funcionario> {
    return this.http.get<{ error: string, result: Funcionario }>(`${this.apiUrl}/funcionario/${id}`).pipe(
      map(response => response.result)
    );
  }

  addFuncionario(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.post<{ error: string, result: Funcionario }>(`${this.apiUrl}/funcionario`, funcionario).pipe(
      map(response => {
        return response.result;
      })
    );
  }

  updateFuncionario(id: number, funcionario: Funcionario): Observable<Funcionario> {
    return this.http.put<{ error: string, result: Funcionario }>(`${this.apiUrl}/funcionario/${id}`, funcionario).pipe(
      map(response => response.result)
    );
  }

  deleteFuncionario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/funcionario/${id}`);
  }
}
