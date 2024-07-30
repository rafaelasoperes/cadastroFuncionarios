// src/app/app.component.ts
import { Component } from '@angular/core';
import { FuncionariosService } from './funcionarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string | undefined;

  constructor(private funcionariosService: FuncionariosService) {}

  ngOnInit() {
    this.funcionariosService.currentTitle.subscribe(title => this.title = title);
  }
}

