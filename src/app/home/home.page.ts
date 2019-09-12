import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private campo : String = '0';

  constructor() {}


  digitarNumero(digito : String){
    if (this.campo == '0'){
      this.limparCampo();
    }
    this.preencherCampo(digito);  
  }

  zerarCampo(){
    this.campo = '0';
  }

  limparCampo(){
    this.campo = '';
  }

  digitarOperacao(operacao : String){
    this.preencherCampo(operacao);  
  }

  private preencherCampo(texto: String) {
    this.campo = `${this.campo} ${texto}`;
  }
}
