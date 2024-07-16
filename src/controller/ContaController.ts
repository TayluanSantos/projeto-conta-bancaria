import { Conta } from '../model/Conta';
import { ContaRepository } from './../repository/ContaRepository';
export class ContaController implements ContaRepository {
   
    // Coleção do tipo Array para armazenar objetos do tipo Conta
    private _listaContas: Conta[] = new Array<Conta>();

    // Controlar os Números das Contas
    public numero: number = 0;

    procurarPorTitular(titular: string): void {
        let buscaPorTitular = this._listaContas.filter( conta => 
            conta.titular.includes(titular)
        )

        buscaPorTitular.forEach(conta => conta.visualizar());
    }

    procurarPorNumero(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta !== null) {
            buscaConta.visualizar();
        } else {
            console.log("Conta não encontrada!");
        }
    }
    listaTodas(): void {
        for (let conta of this._listaContas) {
            conta.visualizar();
        }
    }

    cadastrar(conta: Conta): void {
        this._listaContas.push(conta);
        console.log("A conta foi cadastrada com sucesso!");
    }
    atualizar(conta: Conta): void {
        let buscaConta = this.buscarNoArray(conta.numero);


        if (buscaConta !== null) {
            this._listaContas[this._listaContas.indexOf(buscaConta)] = conta;
            console.log("\nA conta foi atualizada!");
        } else {
            console.log("\nConta não encontrada!");
        }
    }
    deletar(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta !== null) {
            this._listaContas.splice(this._listaContas.indexOf(buscaConta), 1);
            console.log(`\nA conta ${buscaConta.numero} foi excluída!`)
        } else {
            console.log("Conta não encontrada!");
        }
    }


    sacar(numero: number, valor: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta !== null) {
            if (buscaConta.sacar(valor)) {
                console.log("\nO Saque foi efetuado com sucesso!");
            }
        } else {
            console.log("Conta não encontrada!");
        }
    }
    depositar(numero: number, valor: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta !== null) {
            buscaConta.depositar(valor);
        } else {
            console.log("Conta não encontrada!");
        }
    }
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        let buscaContaOrigem = this.buscarNoArray(numeroOrigem);
        let buscaContaDestino = this.buscarNoArray(numeroDestino);


        if (buscaContaOrigem !== null && buscaContaDestino !== null) {
            if (buscaContaOrigem.sacar(valor) === true) {
                buscaContaDestino.depositar(valor);
                console.log("\nA Transferência foi efetuada com sucesso!");
            }
        } else {
            console.log("\nA Conta de Origem e/ou Conta de Destino não foram encontradas!");
        }
    }


    // Métodos Auxiliares 
    public gerarNumero(): number {
        return ++this.numero;
    }

    public buscarNoArray(numero: number): Conta | null {
        for (let conta of this._listaContas) {
            if (conta.numero === numero) {
                return conta;
            }
        }

        return null;
    }

}