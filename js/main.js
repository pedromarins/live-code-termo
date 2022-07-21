const palavras = ['IDEIA', 'SUTIL', 'VIGOR', 'PODER', 'AMIGO', 'MAMAE', 'SAGAZ', 'NOBRE', 'AFETO', 'FAZER', 'CARNE', 'PODER', 'MORAL', 'MUITO', 'HONRA', 'JUSTO', 'ETNIA', 'SONHO', 'ICONE', 'RAZAO', 'SONHO', 'CASAL', 'TEMPO', 'DENGO', 'GENRO', 'CULTO', 'TEMOR', 'VICIO', 'FORTE', 'REGRA', 'LOUCO', 'SAUDE', 'BANAL', 'FELIZ', 'ONTEM', 'HOMEM', 'MEIGA', 'HEROI', 'ABRIR', 'FALSO', 'BRAVO', 'GENIO', 'seara', 'dengo', 'pesar', 'então', 'ávido', 'posse', 'genro', 'boçal', 'coser', 'ardil', 'causa', 'regra', 'dogma', 'louco', 'criar', 'banal', 'impor', 'round', 'saúde', 'jeito', 'atrás', 'ordem', 'acaso', 'puder', 'valor', 'cisma', 'bruma', 'lugar', 'êxodo', 'óbvio', 'afins', 'ímpio', 'gerar', 'levar', 'reles', 'tecer', 'casta', 'óbito', 'prime', 'selar', 'morte', 'ranço', 'anelo', 'deter', 'labor', 'gesto', 'vemos', 'humor', 'árduo', 'rever', 'atuar', 'feixe', 'pobre']
const palavrasTratadas = palavras.map((element) => { 
    return element.toUpperCase().normalize('NFD').replace(/[^\w\s]/gi, '')
})

const tentativa = document.querySelector("#tentativa");

tentativa.addEventListener("submit", (event) => {
    event.preventDefault()

    const chute = document.querySelector("#chute");

    chuteTratado = chute.value.toUpperCase().normalize('NFD').replace(/[^\w\s]/gi, '').replace(" ", "")

    if(chuteTratado.length == 5) {
        if(palavrasTratadas.find(element => element === chuteTratado)) {
            console.log("vai comparar")
        } else {
            console.error("Palavra não existe")
        }
    } else {
        console.error("Digite uma palavra com 5 caracteres.")
    }
})

function sortearPalavra() {
    const min = 0
    const max = palavras.length
    let posicao = Math.floor(Math.random() * (max - min)) + min
    return palavras[posicao].toUpperCase()
}