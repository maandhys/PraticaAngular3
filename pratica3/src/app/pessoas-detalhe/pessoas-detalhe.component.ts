import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { PessoasService } from '../services/pessoas.service';
import { Pessoas } from '../models/pessoas.model';

@Component({
  selector: 'app-pessoas-detalhe',
  templateUrl: './pessoas-detalhe.component.html',
  styleUrls: ['./pessoas-detalhe.component.css']
})
export class PessoasDetalheComponent implements OnInit {

  @Output() alterarPessoa = new EventEmitter();
  @Input() pessoa: Pessoas;

  novaPessoa: Pessoas;

  constructor( private servicoPessoa: PessoasService) { }

  ngOnInit() {
  }

  alteraPessoa(changes) {
    this.alterarPessoa.emit(changes);
    var change = this.servicoPessoa.changePessoa(changes);
  }

}

// 15) A função criada para atualizar os dados deverá:
// a) mapear a alteração do nome desta pessoa, passando um objeto que conterá
// o id da pessoa e o novo nome atualizado (pode inserir um nome
// manualmente, diretamente no Javascript) via output para o componente
// pessoas e atualizar o nome da referida pessoa na tabela para o nome
// recebido como parâmetro.
// b) chamar a função atualizarPessoa do serviço de pessoas.