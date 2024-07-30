// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';  // Importar o AppRoutingModule
import { AppComponent } from './app.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';
import { FuncionarioDetailComponent } from './funcionario-detail/funcionario-detail.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    AppComponent,
    FuncionariosComponent,
    FuncionarioFormComponent,
    FuncionarioDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  // Adicionar o AppRoutingModule
    ReactiveFormsModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

