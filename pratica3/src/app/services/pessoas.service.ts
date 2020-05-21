import { Injectable } from '@angular/core';
import { Pessoas } from '../models/pessoas.model';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  pessoasJson = [
    {
      "id": 0,
      "name": "Saunders Rosa",
      "idade": 23,
      "corOlhos": "brown",
      "sexo": "male",
      "email": "saundersrosa@eyewax.com"
    },
    {
      "id": 1,
      "name": "Mercer Vincent",
      "idade": 27,
      "corOlhos": "green",
      "sexo": "male",
      "email": "mercervincent@eyewax.com"
    },
    {
      "id": 2,
      "name": "Frederick Gonzales",
      "idade": 37,
      "corOlhos": "blue",
      "sexo": "male",
      "email": "frederickgonzales@eyewax.com"
    },
    {
      "id": 3,
      "name": "Nicholson Frank",
      "idade": 25,
      "corOlhos": "brown",
      "sexo": "male",
      "email": "nicholsonfrank@eyewax.com"
    },
    {
      "id": 4,
      "name": "Cox Reeves",
      "idade": 23,
      "corOlhos": "brown",
      "sexo": "male",
      "email": "coxreeves@eyewax.com"
    },
    {
      "id": 5,
      "name": "Bonnie Estrada",
      "idade": 35,
      "corOlhos": "green",
      "sexo": "female",
      "email": "bonnieestrada@eyewax.com"
    }
  ];

  pessoasArray: Pessoas[] = this.pessoasJson;
  pessoa: Pessoas;

  constructor() { }

  getPessoas() {
    return this.pessoasArray;
  }

  getPessoaId(id): Pessoas {
    return this.pessoa;
  }

  changePessoa(pessoa) {
    this.pessoasArray.forEach(x => {
      if (x.id == pessoa.id) {
        x.name = pessoa.name;
      }
    });
    return true;
  }

  atualizarPessoa(id) {
    console.log(id);
  }
}



// a) declare uma propriedade pessoas que será um array de pessoas. ** let
// pessoasArray: pessoas[] = [ARRAY DE PESSOAS AQUI]; **
// b) crie um método getPessoas que deverá retornar um array de Pessoas
// listagem de todas as pessoas.
// c) crie um método getPessoa(id) que deverá retornar os dados específicos de
// uma pessoa. Este método deverá percorrer seu array de Pessoas e
// encontrar a pessoa pelo id e retornar apenas os dados desta pessoa.
// d) Crie um método atualizarPessoa(id) que deverá exibir no console.log o id
// recebido como parâmetro para atualizar a pessoa.