import { Conta } from "./Conta";

export class ContaCorrente extends Conta {
    private _limite: number;


	constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number,limite: number) {
        super(numero,agencia,tipo,titular,saldo);
		this._limite = limite;
	}

	public get limite(): number {
		return this._limite;
	}

	public set limite(limite: number) {
		this._limite = limite;
	}

    public visualizar() {
        super.visualizar();
        console.log(`Limite: ${this.limite}`);
    }

    public sacar(valor: number): boolean{
 
        if((this.saldo  + this.limite) >= valor){
            this.saldo = this.saldo - valor;
            return true;
        }
        
        console.log("\n******************************************")
        console.log("Saldo é insuficiente!")
        return false;
    }
}