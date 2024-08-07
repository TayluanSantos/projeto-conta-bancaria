export abstract class Conta {

     // Definir os Atributos da Classe (Caracteristicas)
     private _numero: number;
     private _agencia: number;
     private _tipo: number;
     private _titular: string;
     private _saldo: number;
 
     // Definimos o Método Construtor, responsável por criar os Objetos da Classe
     constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number) {
         this._numero = numero;
         this._agencia = agencia;
         this._tipo = tipo;
         this._titular = titular;
         this._saldo = saldo;
     }
 
     // Definidos os Métodos Get e Set de cada Atributo
     public get numero(): number {
         return this._numero;
     }
 
     public get agencia(): number {
         return this._agencia;
     }
  
     public get tipo(): number {
         return this._tipo;
     }
 
     public get titular(): string {
         return this._titular;
     }
 
     public get saldo(): number {
         return this._saldo;
     }
  
     public set numero(numero: number) {
         this._numero = numero;
     }
 
     public set agencia(agencia: number) {
         this._agencia = agencia;
     }
 
     public set tipo(tipo: number) {
         this._tipo = tipo;
     }
 
     public set titular(titular: string) {
         this._titular = titular;
     }
  
     public set saldo(valor: number) {
         this._saldo = valor;
     }
 
     // Método Sacar dinheiro da conta
     public sacar(valor: number): boolean{
 
         if(this._saldo < valor){
             console.log("\n******************************************");
             console.log("Saldo é insuficiente!");
             return false;
         }
 
         this._saldo = this._saldo - valor;
         return true;
     }
 
     // Método Depositar
     public depositar(valor: number): void{
         this._saldo = this._saldo + valor;
     }
 
     // Método para visualizar todas as informações do Objeto
     public visualizar(): void{
 
         let tipo: string = "";
 
         switch(this._tipo){
             case 1:
                 tipo = "Conta Corrente";
             break;
             case 2:
                 tipo = "Conta Poupança";
             break
         }
 
         console.log('\n******************************************');
         console.log('Dados da Conta');
         console.log('******************************************');
         console.log(`Numero da conta: ${this._numero}`);
         console.log(`Numero da agência: ${this._agencia}`);
         console.log(`Tipo da conta: ${tipo}`);
         console.log(`Titular da conta: ${this._titular}`);
         console.log(`Saldo da conta: ${this._saldo.toFixed(2)}`);
     } 
}