export interface Funcionario {
  id?: number;
  nome: string;
  genero?: string;
  telefone?: string;
  nascimento?: Date;
  estadocivil?: string;
  rua?: string;
  numero?: number;
  complemento?: string;
  bairro?: string;
  cidade?: string;
  estado?: string;
}


export interface ApiResponse {
  error: string;
  result: Funcionario[];
}
