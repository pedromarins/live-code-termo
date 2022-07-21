const palavras = ['IDEIA', 'SUTIL', 'VIGOR', 'PODER', 'AMIGO', 'MAMAE', 'SAGAZ', 'NOBRE', 'AFETO', 'FAZER', 'CARNE', 'PODER', 'MORAL', 'MUITO', 'HONRA', 'JUSTO', 'ETNIA', 'SONHO', 'ICONE', 'RAZAO', 'SONHO', 'CASAL', 'TEMPO', 'DENGO', 'GENRO', 'CULTO', 'TEMOR', 'VICIO', 'FORTE', 'REGRA', 'LOUCO', 'SAUDE', 'BANAL', 'FELIZ', 'ONTEM', 'HOMEM', 'MEIGA', 'HEROI', 'ABRIR', 'FALSO', 'BRAVO', 'GENIO', 'seara', 'dengo', 'pesar', 'então', 'ávido', 'posse', 'genro', 'boçal', 'coser', 'ardil', 'causa', 'regra', 'dogma', 'louco', 'criar', 'banal', 'impor', 'round', 'saúde', 'jeito', 'atrás', 'ordem', 'acaso', 'puder', 'valor', 'cisma', 'bruma', 'lugar', 'êxodo', 'óbvio', 'afins', 'ímpio', 'gerar', 'levar', 'reles', 'tecer', 'casta', 'óbito', 'prime', 'selar', 'morte', 'ranço', 'anelo', 'deter', 'labor', 'gesto', 'vemos', 'humor', 'árduo', 'rever', 'atuar', 'feixe', 'pobre']

const chute = document.querySelector("#chute");

chute.addEventListener("input", () => {
    if(chute.value.length == 5) {
        console.log(chute.value)
    }
})


function sortearPalavra() {
    const min = 0
    const max = palavras.length
    let posicao = Math.floor(Math.random() * (max - min)) + min
    return palavras[posicao].toUpperCase()
}