const palavras = ['IDEIA', 'SUTIL', 'VIGOR', 'PODER', 'AMIGO', 'MAMAE', 'SAGAZ', 'NOBRE', 'AFETO', 'FAZER', 'CARNE', 'PODER', 'MORAL', 'MUITO', 'HONRA', 'JUSTO', 'ETNIA', 'SONHO', 'ICONE', 'RAZAO', 'SONHO', 'CASAL', 'TEMPO', 'DENGO', 'GENRO', 'CULTO', 'TEMOR', 'VICIO', 'FORTE', 'REGRA', 'LOUCO', 'SAUDE', 'BANAL', 'FELIZ', 'ONTEM', 'HOMEM', 'MEIGA', 'HEROI', 'ABRIR', 'FALSO', 'BRAVO', 'GENIO', 'seara', 'dengo', 'pesar', 'então', 'ávido', 'posse', 'genro', 'boçal', 'coser', 'ardil', 'causa', 'regra', 'dogma', 'louco', 'criar', 'banal', 'impor', 'round', 'saúde', 'jeito', 'atrás', 'ordem', 'acaso', 'puder', 'valor', 'cisma', 'bruma', 'lugar', 'êxodo', 'óbvio', 'afins', 'ímpio', 'gerar', 'levar', 'reles', 'tecer', 'casta', 'óbito', 'prime', 'selar', 'morte', 'ranço', 'anelo', 'deter', 'labor', 'gesto', 'vemos', 'humor', 'árduo', 'rever', 'atuar', 'feixe', 'pobre']
const palavrasTratadas = palavras.map((element) => { 
    return element.toUpperCase().normalize('NFD').replace(/[^\w\s]/gi, '')
})

const palavraSorteada = (function (){
    const min = 0
    const max = palavras.length
    let posicao = Math.floor(Math.random() * (max - min)) + min
    return palavras[posicao].toUpperCase()
})()

const tentativa = document.querySelector("#tentativa");

// Enviar o formulário de tentativa
tentativa.addEventListener("submit", (event) => {
    event.preventDefault()

    // Captura o input de texto
    const chute = document.querySelector("#chute");

    // Tratar o valor do input para retirar acentos, espaços e para deixar tudo maiúsculo
    let chuteTratado = chute.value.toUpperCase().normalize('NFD').replace(/[^\w\s]/gi, '').replace(" ", "")

    // Se a palavra digitada tiver 5 caracteres
    if(chuteTratado.length == 5) {
        // Se a palavra digitada existe na lista
        console.log(palavraSorteada)
        if(palavrasTratadas.find(element => element === chuteTratado)) {
            comparaPalavras(chuteTratado)
        } else {
            atualizaAviso("Palavra não existe.")
        }
    } else {
        atualizaAviso("Digite uma palavra com 5 caracteres!")
    }

    chute.value = ''
})

function atualizaAviso(texto) {
    document.querySelector(".area-resposta").textContent = texto
}



function comparaPalavras(chuteTratado) {
    console.log("Palavra existe.")
    const letrasDoChuteTratado = chuteTratado.split('')
    const letrasDapalavraSorteada = palavraSorteada.split('')
    
    for(i=0; i<letrasDoChuteTratado.length;i++) {
        if(letrasDoChuteTratado[i] == letrasDapalavraSorteada[i]) {
            console.log("Acertei a letra " + (i+1) )
        } else {
            console.error ("Errei a letra " + (i+1))
        }
    }
}