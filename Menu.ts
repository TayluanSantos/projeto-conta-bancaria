import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";

export function main() {

    let opcao , numero , agencia , tipo , saldo , limite , aniversario,valor,numeroDestino: number;
    let titular : string;
    const tiposConta = ["Conta Corrente","Conta Poupança"];

    const contas : ContaController = new ContaController();


    // CONTA CORRENTE

    // Criando novas Instâncias da Classe Conta Corrente (Objetos)
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 1234, 1, 'Amanda Magro', 1000000.00,100000));
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 1234, 1, 'João da Silva',1000, 100));


    // CONTA POUPANÇA
    
    // Criando novas Instâncias da Classe Conta Poupança (Objetos)
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 1234, 2 , "Geana Almeida", 10000, 10));
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 1234, 2 , 'Jean Lima', 15000, 15)) ;


    while (true) {
        console.log(colors.fg.magentastrong)
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("              BANCO DO BRASIL DO BRASIL              ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ",colors.reset);

        console.log(colors.fg.magentastrong)
        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log(colors.fg.green)
            console.log("\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.magentastrong);
                console.log("\n\nCriar Conta\n\n");
    
                console.log('Digite o Número da Agência: ');
                agencia = readlinesync.questionInt("");

                console.log('Digite o Nome do Titular da Conta: ');
                titular = readlinesync.question("");

                console.log('Digite o Saldo da Conta: ');
                saldo = readlinesync.questionFloat("");

                console.log('Digite o Tipo da Conta: ');
                tipo = readlinesync.keyInSelect(tiposConta,"",{cancel:false}) +1;

                
                switch(tipo) {
                    case 1: 
                         console.log('Digite o Limite da Conta: ');
                        limite = readlinesync.questionFloat("");
                        contas.cadastrar(new ContaCorrente(contas.gerarNumero(),agencia,tipo,titular,saldo,limite));
                    break

                    case 2:
                        console.log('Digite o Aniversario da Conta: ');
                        aniversario = readlinesync.questionFloat(""); 
                        contas.cadastrar(new ContaPoupanca(contas.gerarNumero(),agencia,tipo,titular,saldo,aniversario))   
                    break
                }
                keyPress();
                break;
            case 2:
                console.log(colors.fg.magentastrong)
                console.log("\nListar todas as Contas\n");
                contas.listaTodas();
                keyPress()
                break;
            case 3:
                console.log(colors.fg.magentastrong)
                console.log("\nConsultar dados da Conta - por número\n");

                console.log("Digite o número da conta:")
                numero = readlinesync.questionInt("");
                contas.procurarPorNumero(numero);
                keyPress()
                break;
            case 4:
                console.log(colors.fg.magentastrong)

                console.log("\nAtualizar dados da Conta\n");


                console.log("Digite o número da conta:")
                numero = readlinesync.questionInt("");

                let conta = contas.buscarNoArray(numero);

                if(conta) {

                console.log('Digite o Número da Agência: ');
                agencia = readlinesync.questionInt("");

                console.log('Digite o Nome do Titular da Conta: ');
                titular = readlinesync.question("");

                console.log('Digite o Saldo da Conta: ');
                saldo = readlinesync.questionFloat("");

                let tipo = conta.tipo;

                switch(tipo) {
                    case 1: 
                         console.log('Digite o Limite da Conta: ');
                        limite = readlinesync.questionFloat("");
                        contas.atualizar(new ContaCorrente(numero,agencia,tipo,titular,saldo,limite));
                    break

                    case 2:
                        console.log('Digite o Aniversario da Conta: ');
                        aniversario = readlinesync.questionFloat(""); 
                        contas.atualizar(new ContaPoupanca(numero,agencia,tipo,titular,saldo,aniversario))   
                    break
                } 
             } else {
                console.log(`A conta número ${numero} não existe!`);
             }
                keyPress()
                break;
            case 5:
                console.log(colors.fg.magentastrong);
                console.log("\nApagar uma Conta\n",colors.reset);

                console.log(colors.fg.magentastrong);
                console.log("Digite o número da conta:")
                numero = readlinesync.questionInt("");
                contas.deletar(numero);
                
                keyPress()
                break;
            case 6:
                console.log(colors.fg.magentastrong);
                console.log("\nSaque\n");

                console.log("Digite o número da conta:")
                numero = readlinesync.questionInt("");

                console.log("Digite o valor do saque:")
                valor = readlinesync.questionFloat("");

                contas.sacar(numero,valor);

                keyPress()
                break;
            case 7:
                console.log(colors.fg.magentastrong);
                console.log("\nDepósito\n");

                console.log("Digite o número da conta:")
                numero = readlinesync.questionInt("");

                console.log("Digite o valor do depósito:")
                valor = readlinesync.questionFloat("");

                contas.depositar(numero,valor);
                keyPress()
                break;
            case 8:
                console.log(colors.fg.magentastrong);
                console.log("\nTransferência entre Contas\n");

                console.log("Digite o número da conta de origem:")
                numero = readlinesync.questionInt("");

                console.log("Digite o número da conta de destino:")
                numeroDestino = readlinesync.questionInt("");

                console.log("Digite o valor da transferencia:")
                valor = readlinesync.questionFloat("");

                contas.transferir(numero,numeroDestino,valor);
                keyPress()
                break;
            default:
                console.log(colors.fg.red);
                console.log("\nOpção Inválida!\n");
                keyPress()
                break;
        }
    }

}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

/* Função com os dados da pessoa desenvolvedora */

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Tayluan de Jesus dos Santos");
    console.log("Generation Brasil - generation@generation.org");
    console.log("github.com/TayluanSantos");
    console.log("*****************************************************");
}

main();