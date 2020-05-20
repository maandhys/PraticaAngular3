import { Component, OnInit } from '@angular/core';
import { Pessoas } from '../models/pessoas.model';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {

  pessoasArray: Pessoas[];
  detalhePessoa: false;
  pessoa: Pessoas;

  constructor() { }

  ngOnInit() {
  }

  changePessoa(id, nome) { 
    this.pessoasArray[id]["nome"] = nome;
    
    
  }

}

// a) declare uma propriedade pessoas que será um array de pessoas. ** let
// pessoasArray: pessoas[] = [ARRAY DE PESSOAS AQUI]; **
// b) um booleano chamado detalhePessoa que deverá ser inicializado como
// falso.
// c) um objeto do tipo pessoa.
// d) uma função para receber como output os dados de uma pessoa (id,nome) e
// alterar o nome da pessoa no array de pessoas.