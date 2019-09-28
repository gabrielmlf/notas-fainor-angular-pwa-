import { Component, OnInit } from '@angular/core';
import { pipe, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'tela',
  templateUrl: './tela.component.html',
  styleUrls: ['./tela.component.scss']
})
export class TelaComponent implements OnInit {

  primeiraUnidade: number;
  segundaUnidade: number;
  terceiraUnidade: number;
  mediaGeral: number = 0;
  carregando: boolean;
  resultado: boolean = false;
  reprovado: boolean = false;
  final: boolean = false;
  notaFaltante: number;
  notaFinal: number;
  troll: boolean = false;
  pontuacaoTotal: number;

  constructor() { }


  ngOnInit() {

  }

  calcular() {
    this.zerar();
    if (this.primeiraUnidade > 10 || this.segundaUnidade > 10 || this.terceiraUnidade > 10 ||
      this.primeiraUnidade < 0 || this.segundaUnidade < 0 || this.terceiraUnidade < 0
      || !this.primeiraUnidade || !this.segundaUnidade || !this.terceiraUnidade) {
      this.troll = true;
    } else {
      this.carregando = true;
      this.pontuacaoTotal = (+this.primeiraUnidade) + (+this.segundaUnidade) + (+this.terceiraUnidade);
      this.mediaGeral = (this.pontuacaoTotal / 3);
      if (this.pontuacaoTotal < 12) {
        this.reprovado = true;
        this.notaFaltante = 12 - this.pontuacaoTotal;
      } else if (this.mediaGeral < 7) {
        this.final = true;
        this.notaFaltante = 21 - this.pontuacaoTotal;
        this.notaFinal = (((50 - this.mediaGeral) * 7) / 3) - 100;
      } else { }
      setTimeout(() =>
        this.carregando = false
        , 1000)
      this.resultado = true;
    }
  }
  zerar(){
    this.notaFaltante=0;
    this.pontuacaoTotal=0;
    this.mediaGeral=0;
    this.notaFinal=0;
    this.final=false;
    this.reprovado=false;
    this.resultado=false;
    this.troll=false;
  }
}
