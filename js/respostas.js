var array = [0,1]; //para programação dinâmica da questão 2

function Q1(){

    console.log("Questão 1:");
    let INDICE = 13, SOMA = 0, K = 0;

    while (K < INDICE){
        K = K + 1;
        SOMA = SOMA + K;
    }

    document.getElementById("q1").innerText = SOMA;
    console.log(SOMA);

}

function Q2(){

    console.log("Questão 2:");

    let entrada = document.getElementById("Q2").value;
    console.log(entrada);
    if(entrada){
        let n = parseInt(entrada);
        let resposta = fibonacci(n);

        document.getElementById("q2").innerText = resposta;
        console.log(resposta);
    } else {
        console.log("Digite um valor válido");
        document.getElementById("q2").innerText = "Digite um valor válido";
    }

    document.getElementById("Q2").innerText = "";

}

function fibonacci(n){

    let i = 0;
    while(true){

        if (i === array.length)
            array.push(array[i-1]+array[i-2]);

        if (array[i] === n) return ("Pertence a sequência");

        if (array[i] > n) return ("Não pertenece a sequência");

        i+=1;
    }

}

function Q3(){

    console.log("Questão 3:");
    
    //json com dia do mes : valor do faturamento
    let faturamento = { "1": 23454.20,
                        "2": 3523.55,
                        "3": 3568.88,
                        "4": 46783.56,
                        "5": 76957.75,
                        "8": 57657.76
                        };

    console.log(faturamento);
    console.log("Json reduzido com os 6 primeiros dias válidos de um mês, dia 6 e 7 não incluídos por serem fim de semana");
    document.getElementById("w").innerText = "Json reduzido com os 6 primeiros dias válidos de um mês, dia 6 e 7 não incluídos por serem fim de semana";
    document.getElementById("z").innerText = JSON.stringify(faturamento);

    let a = "menor valor: " + menorValor(faturamento);
    console.log(a);
    document.getElementById("a").innerText = a;
    
    let b = "maior valor: " + maiorValor(faturamento);
    console.log(b);
    document.getElementById("b").innerText = b;

    let c = "número de dias com valor superior a media mensal: " + diasComValorSuperiorAMedia(faturamento);
    console.log(c);
    document.getElementById("c").innerText = c;
    

}

function menorValor(faturamento){

    primeiroElemento = true;
    let menorValor = 0;

    for(var dia in faturamento){

        if(primeiroElemento){

            menorValor = faturamento[dia];
            primeiroElemento = false;

        } else {

            if(faturamento[dia] < menorValor) menorValor = faturamento[dia];

        }

    }

    return menorValor;

}

function maiorValor(faturamento){

    primeiroElemento = true;
    let maiorValor = 0;

    for(var dia in faturamento){

        if(primeiroElemento){

            maiorValor = faturamento[dia];
            primeiroElemento = false;

        } else {

            if(faturamento[dia] > maiorValor) maiorValor = faturamento[dia];

        }

    }

    return maiorValor;

}

function diasComValorSuperiorAMedia(faturamento){

    let soma = 0;
    let quantidadeDeDias = 0;
    let media = 0

    for(var dia in faturamento){

        soma += faturamento[dia];
        quantidadeDeDias += 1;
    }

    media = soma/quantidadeDeDias;

    let diasComValorSuperior = 0;
    for(var dia in faturamento){

        if(faturamento[dia]>media) diasComValorSuperior += 1;
    }

    return diasComValorSuperior;

}

function Q4(){
    console.log("Questão 4:");
    let faturamento = { "SP": 67836.43,
                        "RJ": 36678.66,
                        "MG": 29229.88,
                        "ES": 27165.48,
                        "Outros": 19849.53}    
    
    let soma = 0;
    for(estado in faturamento){
        soma += faturamento[estado];
    }

    let resposta = "";
    for(estado in faturamento){
        resposta += estado + ":" + (faturamento[estado]/soma)*100 + "%" + "\n";
    }
    console.log(resposta);
    document.getElementById("q4").innerText = resposta;
}

function Q5(){

    console.log("Questão 5");
    let string = document.getElementById("Q5").value;

    let resposta = reverse(string);

    console.log(resposta);
    document.getElementById("q5").innerText = string + " -> " + resposta;
    document.getElementById("Q5").value = "";

}

function reverse(string){

    let reversedString = "";
    for(let i=string.length-1; i>=0; i--){
        reversedString += string[i];
    }
    return reversedString;
}