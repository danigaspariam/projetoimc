let listaPessoas = []; //lista/array vazia


function calcularIMC(altura, peso) {
    return peso / (altura * altura);
    // return peso / (altura * altura);
}

/*
    Resultado	        Situação
    Menor que 18.5      Magreza Severa
    Entre 18.5 e 24.99	Peso normal
    Entre 25 e 29.99	Acima do peso
    Entre 30 e 34.99	Obesidade I
    Entre 35 e 39.99	Obesidade II (severa)
    Acima de 40	        Cuidado!!! else
*/
function geraSituacao(imc) {

    if (imc < 18.5) {
        return "Magreza Severa"
    } else if (imc >= 18.5 && imc < 25) {
        return "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        return "Acima do peso";
    } else if (imc >= 30 && imc < 35) {
        return "Obesidade I"
    } else if (imc >= 35 && imc < 40) {
        return "Obesidade II (severa)";
    } else {
        return "Cuidado!!";
    }
}

function calcular() {

    event.preventDefault(); //parar o submit do formulário
    //entrada de dados
    let nome = document.getElementById('nome').value;
    let altura = parseFloat(document.getElementById('altura').value);
    let peso = parseFloat(document.getElementById('peso').value);

    //processamento

    if (nome == '' || isNaN(altura) || isNaN(peso)) {
        alert("É Necessário preencher todos os campos!");
    } else {
        //todos os dados preenchidos
        let imc = calcularIMC(altura, peso);
        let situacao = geraSituacao(imc);

        // console.log(nome, altura, peso, imc, situacao);

        let pessoa = {};
        pessoa.nome = nome;
        pessoa.altura = altura;
        pessoa.peso = peso;
        pessoa.imc = imc;
        pessoa.situacao = situacao;

        listaPessoas.push(pessoa);
        exibirDados();

        console.log(listaPessoas);
    }
}

/**
 * Essa função gera o template de linhas da tabela
 * e insere no html. Baseado na lista de dados em memória (array)
 */

function exibirDados() {
    let template = "";

    for (let i = 0; i < listaPessoas.length ; i++) {
        
        template += `<tr>
                        <td>${listaPessoas[i].nome}</td>
                        <td>${listaPessoas[i].altura}</td>
                        <td>${listaPessoas[i].peso}</td>
                        <td>${listaPessoas[i].imc}</td>
                        <td>${listaPessoas[i].situacao}</td>
                    </tr>`;

        
    }

   
    document.getElementById('cadastro').innerHTML = template;
}