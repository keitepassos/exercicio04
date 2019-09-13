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
    let ultimo_campo;
    try{
      ultimo_campo = this.campo.substr(-1)
    }catch(e){}  
    if(ultimo_campo!='' && (ultimo_campo !='+' && ultimo_campo !='-' && ultimo_campo !='/' && ultimo_campo !='*'))
      this.preencherCampo(operacao)  
  }

  private preencherCampo(texto: String) {
     this.campo = `${this.campo}${texto}`;
  }

  resultado(){
    let resultado=''
    try{
      resultado = eval(this.campo.toString())
      this.campo = '' 
      this.campo = resultado   
    }catch(e){ console.log(e)}
   
  }
}
