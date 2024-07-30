import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionariosService } from '../funcionarios.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Funcionario } from '../models/funcionario.model';
@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent implements OnInit {
  funcionarioForm: FormGroup;
  isEditMode: boolean = false;
  funcionarioId!: number;
  generos: string[] = ['Masculino', 'Feminino', 'Outros'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private funcionariosService: FuncionariosService
  ) {
    this.funcionarioForm = this.fb.group({
      nome: ['', Validators.required],
      genero: [''],
      telefone: [''],
      nascimento: [null, Validators.required],
      estadocivil: [''],
      rua: [''],
      numero: [''],
      complemento: [''],
      bairro: [''],
      cidade: [''],
      estado: ['']
    });
  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.funcionarioId = +params['id'];
        this.funcionariosService.getFuncionario(this.funcionarioId).subscribe(
          data => {
            // Verifica e converte o campo nascimento se necessário
            const nascimento = data.nascimento ? new Date(data.nascimento) : null;
            this.funcionarioForm.patchValue({
              ...data,
              nascimento: nascimento
            });
            //  Vai atualizar o título para "Novo Funcionário" quando estiver em modo de edição
            this.funcionariosService.setTitle('Editar Funcionário');
          }
        );
      } else {
        this.isEditMode = false;
        //  Vai atualizar o título para "Novo Funcionário" quando não estiver em modo de edição
        this.funcionariosService.setTitle('Novo Funcionário');
      }
    });
  }

  //formatando a data
  formatDate(date: string | Date): string {
    if (typeof date === 'string') {
      date = new Date(date);
    }
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }

  //Atualizando ou enviando um novo funcionario
  onSubmit(): void {
    if (this.funcionarioForm.invalid) {
      console.log('Formulário inválido');
      return;
    }

    console.log('Form Value:', this.funcionarioForm.value);
    if (this.isEditMode) {
      this.funcionariosService.updateFuncionario(this.funcionarioId, this.funcionarioForm.value).subscribe(
        response => {
          console.log('Atualização bem-sucedida:', response);
          this.router.navigate(['/funcionarios']);
        },
        error => {
          console.error('Erro ao atualizar funcionário:', error);
        }
      );
    } else {
      this.funcionariosService.addFuncionario(this.funcionarioForm.value).subscribe(
        response => {
          console.log('Adição bem-sucedida:', response);
          this.router.navigate(['/funcionarios']);
        }
      );
    }
  }
}
