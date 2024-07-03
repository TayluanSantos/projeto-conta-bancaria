import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { Conta } from "./src/model/Conta";

export function main() {

    let opcao: number;

    //Novas Instâncias da Classe Conta (Objetos)
    const c1: Conta = new Conta(1, 1234, 1, 'Júlia Castro', 800000.00);
    const c2: Conta = new Conta(2, 1234, 2, 'Marcella Sanches', 600000.00);

    // Visualizando os dados da Conta c1
    c1.visualizar();

    // Visualizando os dados da Conta c2
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