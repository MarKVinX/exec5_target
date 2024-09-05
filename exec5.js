// Função para inverter a string
function inverterString(str) {
    let stringInvertida = "";

    // Percorre a string de trás para frente e monta a string invertida
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }

    return stringInvertida;
}

// String a ser invertida (pode ser alterada ou recebida de entrada)
let minhaString = "Exemplo de string";

// Chama a função e exibe o resultado
console.log("String original: " + minhaString);
console.log("String invertida: " + inverterString(minhaString));