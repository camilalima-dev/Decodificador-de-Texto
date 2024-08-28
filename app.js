const inputText = document.getElementById('input-text');
const outputText = document.getElementById('nota');
const criptografarBtn = document.getElementById('btn_criptografar');
const descriptografarBtn = document.getElementById('btn_descriptografar');
const copiarBtn = document.getElementById('btn_copiar');


criptografarBtn.addEventListener('click', () => {
    const text = inputText.value;
    if (validateText(text)) {
        outputText.textContent = criptografar(text);
        copiarBtn.style.display = 'block';  // Exibe o botão copiar
    } else {
        outputText.textContent = 'Por favor, use apenas letras minúsculas e sem acentos.';
        copiarBtn.style.display = 'none';  // Oculta o botão copiar se houver erro de validação
    }
    document.getElementsByClassName("imagem_boneco")[0].style.display = "none";
    document.getElementsByClassName("texto_insira")[0].style.display = "none";
    document.getElementsByClassName('input-text')[0].value = "";
});

descriptografarBtn.addEventListener('click', () => {
    const text = inputText.value;
    if (validateText(text)) {
        outputText.textContent = descriptografar(text);
        copiarBtn.style.display = 'block';  // Exibe o botão copiar
    } else {
        outputText.textContent = 'Por favor, use apenas letras minúsculas e sem acentos.';
        copiarBtn.style.display = 'none';  // Oculta o botão copiar se houver erro de validação
    }
    document.getElementsByClassName("imagem_boneco")[0].style.display = "none";
    document.getElementsByClassName("texto_insira")[0].style.display = "none";
    document.getElementsByClassName('input-text')[0].value = "";
});

function criptografar(text) {
    return text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
}


function descriptografar(text) {
    return text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
}

function validateText(text) {
    const regex = /^[a-z\s]*$/;
    return regex.test(text);
}

copiarBtn.addEventListener("click", function() {
    let textoCopiado = document.getElementById("nota").textContent;
    navigator.clipboard.writeText(textoCopiado)
        .then(() => alert("Texto copiado para a área de transferência!"))
        .catch(err => console.error("Erro ao copiar: ", err));
});

function limparTexto() {
    // Limpar o texto da área de entrada
    document.getElementById('input-text').value = '';
    
    // Resetar a área de saída
    const outputText = document.getElementById('nota'); 
    outputText.textContent = 'Nenhuma mensagem encontrada'; // Mensagem padrão
    
    // Esconder o botão de copiar
    const btnCopiar = document.getElementById('btn_copiar');
    btnCopiar.style.display = 'none';
    
    // Mostrar a imagem e a mensagem inicial novamente
    document.getElementsByClassName("imagem_boneco")[0].style.display = "block";
    document.getElementsByClassName("texto_insira")[0].style.display = "block";
}

