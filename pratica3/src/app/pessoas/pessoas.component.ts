import { Component, OnInit } from '@angular/core';
import { Pessoas } from '../models/pessoas.model';
import { PessoasService } from '../services/pessoas.service';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {

  pessoasArray: Pessoas[];
  detalhePessoa: boolean = false;
  pessoa: Pessoas;
  constructor(private servicePessoa: PessoasService) { }

  ngOnInit() {
    this.pessoasArray = this.servicePessoa.getPessoas();
  }
  
  mudarPessoa(pessoa) {
    for (let item of this.pessoasArray) {
      if (item.id === pessoa.id) {
        item.name = pessoa.name;
      }
    }
  }

  detalhe(pessoa) {
    this.detalhePessoa = true;
    this.pessoa = pessoa;
  }
}
