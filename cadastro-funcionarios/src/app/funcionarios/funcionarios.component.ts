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
    this.funcionariosService.setTitle('Lista Funcionários');
    this.fetchFuncionarios();
  }

  fetchFuncionarios(): void {
    this.funcionariosService.getFuncionarios().subscribe(
      (data: any[]) => {
        this.funcionarios = data; // Atualizo a lista de funcionários com o novo array recebido
      }
    );
  }

  //Deleto o funcionario escolhido
  deleteFuncionario(id: number): void {
    this.funcionariosService.deleteFuncionario(id).subscribe(() => {
      this.fetchFuncionarios();
    });
  }
}
