$("#calcular").click(function (){
    //recebendo dados da interface
    let n1 = parseInt($("#n1").val());
    let n2 = parseInt($("#n2").val());
    let operacao = $("input[name='operacao']:checked").val();

    if (isNaN(n1) || isNaN(n2)) {
        alert("Por favor, insira numeros válidos!");
        return;
    }

    let mais_ou_menos;
    let positivo_ou_negativo;

    //verificando par ou ímpar
    if(n1 % 2 == 0) {
        mais_ou_menos = "par";
    } else{
        mais_ou_menos = "impar";
    }

    //verificando positivo ou negativo
    if (n1 >= 0) {
       positivo_ou_negativo = "positivo";
    } else{
       positivo_ou_negativo = "negativo";
    }

    //chamando a função calcular
    let resultado = calcular(n1, n2, operacao);

    //mostrando na interface
    $("#resultado").html("Resultado de "+ n1 + " (que é " + mais_ou_menos + " e " + positivo_ou_negativo + ") mais " + n2 + " é " + resultado);
});

function limpar(){
    $("#n1").val("");
    $("#n2").val("");
    $("#n1").focus();
    $("input[name='operacao']").prop("checked", false);
    $("#resultado").html("Resultado: ");
}

function calcular(n1, n2, operacao){
    let resultado = 0;

    switch(operacao){
        case "soma":
            resultado = n1 + n2;
            break
        case "sub":
            resultado = n1 - n2;
            break
        case "mult":
            resultado = n1 * n2;
            break
        case "div":
            if (n2 == 0){
                console.log("0 não pode ser colocado em valor 2, por favor coloque outro numero")
            } else {
                resultado = n1 / n2;
            }
            break
    }

    return resultado;
}