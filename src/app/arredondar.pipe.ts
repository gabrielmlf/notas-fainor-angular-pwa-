import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arredondar'
})
export class ArredondarPipe implements PipeTransform {

  transform(valor: number, casas: number): number {
    let multiplicador = Math.pow(10, casas || 0)
    return Math.round(valor * multiplicador) / multiplicador;
  }

}
