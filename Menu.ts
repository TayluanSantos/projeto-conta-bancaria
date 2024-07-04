import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";

export function main() {

    let opcao: number;

    // CONTA

    //Novas Instâncias da Classe Conta (Objetos)
    const c1: Conta = new Conta(1, 1234, 1, 'Júlia Castro', 800000.00);
    const c2: Conta = new Conta(2, 1234, 2, 'Marcella Sanches', 600000.00);

    // // Visualizando os dados da Conta c1
    c1.visualizar();

    // // Visualizando os dados da Conta c2
    c2.visualizar();

    // Visualizando o Saldo da Conta c1
    console.log(`\nO Saldo da conta 01 é: ${c1.saldo}`);

    // Alterando o Saldo da Conta c2
    c2.saldo = 900000.00;

    // Visualizando o Saldo da Conta c2, depois de atualizar o valor
    console.log(`\nO Saldo da conta 02 é: ${c2.saldo}`);

    // Saque nas Contas
    console.log(`\nSacar 100.00 Reais da Conta C1: ${c1.sacar(100)}`); // true
    c1.visualizar();

    console.log(`\nSacar 1000000.00 Reais da Conta C2: ${c2.sacar(1000000)}`); // false
    c2.visualizar();

    // Depósito nas Contas
    console.log(`\nDepositar 200000.00 Reais da Conta C1: `); 
    c1.depositar(200000)
    c1.visualizar();

    console.log(`\nDepositar 300000.25 Reais da Conta C2: `); 
    c2.depositar(300000.25)
    c2.visualizar();


    // // CONTA CORRENTE

    // Criando novas Instâncias da Classe Conta Corrente (Objetos)
    const cc1: ContaCorrente = new ContaCorrente(3, 1234, 1, 'Amanda Magro', 1000000.00,100000);
    const cc2: ContaCorrente = new ContaCorrente(4, 1234, 1, 'João da Silva',1000, 100);

    // Visualizando informações das contas 
    cc1.visualizar();
    cc2.visualizar();

    // Operação de Saque
    console.log(`\nSaque de R$ 25.000,00 na Conta CC1: ${cc1.sacar(25000)}\n`);
    cc1.visualizar();

    console.log(`\nSaque de R$ 1.500,00 na Conta CC2: ${cc2.sacar(1500)}`);
    cc2.visualizar();

    // Operação de Depósito

    console.log(`\nDepositar R$ 100.000,00 na Conta CC1:`);
    cc1.depositar(100000);
    cc1.visualizar();
    
    console.log(`\nDepositar R$ 3.000,99 na Conta CC2:`);
    cc2.depositar(3000.99);
    cc2.visualizar();


    // CONTA POUPANÇA
    
    // Criando novas Instâncias da Classe Conta Corrente (Objetos)
    const cp1: ContaPoupanca = new ContaPoupanca(1, 1234, 2 , "Maria", 5000, 30);
    const cp2: ContaPoupanca = new ContaPoupanca(1, 1234, 2 , 'José', 3500, 25);

    // Visualizando informações das contas 
    cp1.visualizar();
    cp2.visualizar();

    // Operação de Saque
    console.log(`\nSaque de R$ 1.500,00 na Conta CP1: ${cp1.sacar(7500)}`);
    cp1.visualizar();

    console.log(`\nSaque de R$ 500,00 na Conta CP2: ${cp2.sacar(500)}`);
    cp2.visualizar();
 
    // Operação de Depósito
    console.log(`\nDepositar R$ 1.000,00 na Conta CP1:`);
    cp1.depositar(1000);
    cp1.visualizar();

    console.log(`\nDepositar R$ 1.500,00 na Conta CP1:`);
    cp2.depositar(1500);
    cp2.visualizar();

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
                console.log(colors.fg.green)
                console.log("\n\nCriar Conta\n\n");

                break;
            case 2:
                console.log(colors.fg.magentastrong)
                console.log("\n\nListar todas as Contas\n\n");

                break;
            case 3:
                console.log(colors.fg.magentastrong)
                console.log("\n\nConsultar dados da Conta - por número\n\n");

                break;
            case 4:
                console.log(colors.fg.magentastrong)
                console.log("\n\nAtualizar dados da Conta\n\n");

                break;
            case 5:
                console.log(colors.fg.red);
                console.log("\n\nApagar uma Conta\n\n");

                break;
            case 6:
                console.log("\n\nSaque\n\n");

                break;
            case 7:
                console.log("\n\nDepósito\n\n");

                break;
            case 8:
                console.log("\n\nTransferência entre Contas\n\n");

                break;
            default:
                console.log("\nOpção Inválida!\n");

                break;
        }
    }

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