export function calcularIMC(pesoKg, alturaM) {
    return pesoKg / (alturaM * alturaM)
}
 
export function classificarIMC(imc) {
    if (imc < 18.5) return 'Abaixo do peso'
    if (imc < 25) return 'Peso normal'
    if (imc < 30) return 'Sobrepeso'
    if (imc < 35) return 'Obesidade Grau I'
    if (imc < 40) return 'Obesidade Grau II'
    return 'Obesidade Grau III'
}
 
export function corDoIMC(imc) {
    if (imc < 18.5) return 'imc-atencao'
    if (imc < 25) return 'imc-normal'
    if (imc < 30) return 'imc-atencao'
    return 'imc-alerta'
}
 
export function calcularTMB(pesoKg, alturaCm, idade, sexo) {
    const base = 10 * pesoKg + 6.25 * alturaCm - 5 * idade
    return sexo === 'masculino' ? base + 5 : base - 161
}
 
export const FATORES_ATIVIDADE = {
    sedentario: { rotulo: 'Sedentário...', fator: 1.2 },
    leve:       { rotulo: 'Leve...',       fator: 1.375 },
    moderado:   { rotulo: 'Moderado...',   fator: 1.55 },
    intenso:    { rotulo: 'Intenso...',    fator: 1.725 },
}
 
export function calcularGastoTotal(tmb, nivelAtividade) {
    const config = FATORES_ATIVIDADE[nivelAtividade]
    const fator = config ? config.fator : 1.2
    return tmb * fator
}

export function classificarTMB(tmb) { 
    if (tmb < 1200) return 'TMB baixa' 
    if (tmb < 1600) return 'TMB moderada' 
    return 'TMB alta' 
}

export function corDoTMB(tmb) { 
    if (tmb < 1200) return 'imc-alerta' 
    if (tmb < 1600) return 'imc-atencao' 
    return 'imc-normal'
}
 
export function calcularHidratacaoLitros(pesoKg) {
    return (pesoKg * 35) / 1000
}
 
export function litrosParaCopos(litros) {
    return Math.round((litros * 1000) / 250)
}
