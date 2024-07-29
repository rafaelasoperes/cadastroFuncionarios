// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/funcionarios', pathMatch: 'full' },
  { path: 'funcionarios', component: FuncionariosComponent },
  { path: 'funcionarios/add', component: FuncionarioFormComponent },
  { path: 'funcionarios/edit/:id', component: FuncionarioFormComponent },
  { path: '**', redirectTo: '/funcionarios' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


