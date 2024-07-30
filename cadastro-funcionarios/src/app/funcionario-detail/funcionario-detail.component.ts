import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FuncionariosService } from '../funcionarios.service';
import { Funcionario } from '../models/funcionario.model';

@Component({
  selector: 'app-funcionario-detail',
  templateUrl: './funcionario-detail.component.html',
  styleUrls: ['./funcionario-detail.component.css']
})
export class FuncionarioDetailComponent implements OnInit {
  funcionario: Funcionario | undefined;

  constructor(
    private funcionariosService: FuncionariosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.funcionariosService.setTitle('Funcionário');
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.funcionariosService.getFuncionario(Number(id)).subscribe(
        (data: Funcionario) => {
          this.funcionario = data;
        }
      );
    }
  }
}
