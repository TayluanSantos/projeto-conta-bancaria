import { Conta } from '../model/Conta';
import { ContaRepository } from './../repository/ContaRepository';
export class ContaController implements ContaRepository {

    // Coleção do tipo Array para armazenar objetos do tipo Conta
    private _listaContas : Conta[] = new Array<Conta>();

    // Controlar os Números das Contas
    public numero : number = 0;

    procurarPorNumero(numero: number): void {
        let buscaConta =  this.buscarNoArray(numero);

        if(buscaConta !== null ) {
            buscaConta.visualizar();
        } else {
            console.log("Conta não encontrada!");
        }
    }
    listaTodas(): void {
       for(let conta of this._listaContas) {
        conta.visualizar();
       }
    }

    cadastrar(conta: Conta): void {
       this._listaContas.push(conta);
       console.log("A conta foi cadastrada com sucesso!");
    }
    atualizar(conta: Conta): void {
        let buscaConta = this.buscarNoArray(conta.numero);

        
        if(buscaConta !== null ) {
            this._listaContas[this._listaContas.indexOf(buscaConta)] = conta;
            console.log("\nA conta foi atualizada!");
        } else {
            console.log("\nConta não encontrada!");
        }
    }
    deletar(numero: number): void {
        let buscaConta =  this.buscarNoArray(numero);

        if(buscaConta !== null ) {
           this._listaContas.splice(this._listaContas.indexOf(buscaConta),1);
           console.log(`\nA conta ${buscaConta.numero} foi excluída!`)
        } else {
            console.log("Conta não encontrada!");
        }
    }


    sacar(numero: number, valor: number): void {
        throw new Error('Method not implemented.');
    }
    depositar(numero: number, valor: number): void {
        throw new Error('Method not implemented.');
    }
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        throw new Error('Method not implemented.');
    }


    // Métodos Auxiliares 
    public gerarNumero() : number {
        return ++ this.numero;
    }

    public buscarNoArray(numero: number) : Conta | null {
        for(let conta of this._listaContas) {
            if(conta.numero === numero) {
                return conta;
            } 
        }

        return null;
    }
    
}