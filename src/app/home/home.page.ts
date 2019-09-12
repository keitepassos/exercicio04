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
    this.campo = `${this.campo} ${digito}`;  
  }

  zerarCampo(){
    this.campo = '0';
  }

  limparCampo(){
    this.campo = '';
  }

}
