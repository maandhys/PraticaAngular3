import { Component, OnInit } from '@angular/core';
import { Pessoas } from '../models/pessoas.model';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {

  pessoas: Pessoas;
  constructor() { }

  ngOnInit() {
  }

}
