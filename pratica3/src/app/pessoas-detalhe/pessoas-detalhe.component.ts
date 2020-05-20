import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';
import { PessoasService } from '../services/pessoas.service';

@Component({
  selector: 'app-pessoas-detalhe',
  templateUrl: './pessoas-detalhe.component.html',
  styleUrls: ['./pessoas-detalhe.component.css']
})
export class PessoasDetalheComponent implements OnInit {

  
  @Output() respostaPessoa = new EventEmitter();

  constructor( servicoPessoa: PessoasService) { }

  ngOnInit() {
  }

  alterarDados(pessoa) {



  }

}

// 15) A função criada para atualizar os dados deverá:
// a) mapear a alteração do nome desta pessoa, passando um objeto que conterá
// o id da pessoa e o novo nome atualizado (pode inserir um nome
// manualmente, diretamente no Javascript) via output para o componente
// pessoas e atualizar o nome da referida pessoa na tabela para o nome
// recebido como parâmetro.
// b) chamar a função atualizarPessoa do serviço de pessoas.