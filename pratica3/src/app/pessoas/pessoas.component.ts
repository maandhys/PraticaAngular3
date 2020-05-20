import { Component, OnInit, Input } from '@angular/core';
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

  @Input() pessoaDetalhe;
  // @Output() respostaFamilia = new EventEmitter();

  constructor(private servicePessoa: PessoasService) { }

  ngOnInit() {
    this.pessoasArray = this.servicePessoa.getPessoas();
  }
  
  changePessoa(id, nome) {
    this.pessoasArray[id]["nome"] = nome;
  }

  detalhe(id) {
    this.detalhePessoa = true;
    this.pessoa = this.servicePessoa.getPessoaId(id);

  }
}

//   13) A função detalhe deverá:
// a) ativar o booleano detalhe
// b) chamar o método getPessoaId do serviço passando o id clicado como
// parâmetro
// c) salvar o resultado no objeto pessoa definido.
// }
