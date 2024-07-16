import { Conta } from "../model/Conta";

export interface ContaRepository {

    // Métodos CRUD 

    procurarPorNumero(numero : number) : void;
    listaTodas() : void;
    cadastrar(conta : Conta) : void;
    atualizar(conta : Conta) : void;
    deletar (numero : number) : void;
    procurarPorTitular(titular : string) : void;

    // Métodos Bancários 

    sacar(numero: number , valor: number) : void;
    depositar(numero: number , valor: number) : void;
    transferir(numeroOrigem: number, numeroDestino: number , valor: number) : void;

}