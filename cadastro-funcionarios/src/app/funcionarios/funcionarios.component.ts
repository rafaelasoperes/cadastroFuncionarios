import { Component, OnInit } from '@angular/core';
import { FuncionariosService } from '../funcionarios.service';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {
  funcionarios: any[] = [];

  constructor(private funcionariosService: FuncionariosService) {}

  ngOnInit(): void {
    this.fetchFuncionarios();
  }

  fetchFuncionarios(): void {
    this.funcionariosService.getFuncionarios().subscribe(
      (data: any[]) => {
        this.funcionarios = data; // Atualiza a lista de funcionários com o array recebido
      },
      error => {
        console.error('Erro ao buscar funcionários', error);
      }
    );
  }

  deleteFuncionario(id: number): void {
    this.funcionariosService.deleteFuncionario(id).subscribe(() => {
      this.fetchFuncionarios();
    }, error => {
      console.error('Erro ao excluir funcionário', error);
    });
  }
}
