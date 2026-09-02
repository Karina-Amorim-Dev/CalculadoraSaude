import { useState } from 'react'

import {
    calcularTMB,
    classificarTMB,
    corDoTMB,
    calcularGastoTotal,
    FATORES_ATIVIDADE
} from '../utils/calculosSaude.js'

import { formatarNumero } from '../utils/formatarNumero.js'


function Tmb() {

    // ============================================================
    // ESTADOS DOS CAMPOS
    // ============================================================

    const [peso, setPeso] = useState('')
    const [altura, setAltura] = useState('')
    const [idade, setIdade] = useState('')
    const [sexo, setSexo] = useState('feminino')
    const [nivelAtividade, setNivelAtividade] = useState('sedentario')

    // Guarda os resultados
    const [tmb, setTmb] = useState(null)
    const [gastoTotal, setGastoTotal] = useState(null)


    // ============================================================
    // FUNÇÃO PARA CALCULAR A TMB
    // ============================================================

    function calcular() {

        // Converte os valores para número
        const pesoNumero = Number(peso)
        const alturaNumero = Number(altura)
        const idadeNumero = Number(idade)


        // Validação dos campos
        if (
            pesoNumero <= 0 ||
            alturaNumero <= 0 ||
            idadeNumero <= 0
        ) {

            alert('Preencha todos os campos corretamente.')

            return
        }


        // Calcula a Taxa Metabólica Basal
        const resultadoTmb = calcularTMB(
            pesoNumero,
            alturaNumero,
            idadeNumero,
            sexo
        )


        // Calcula o gasto energético total
        const resultadoGastoTotal = calcularGastoTotal(
            resultadoTmb,
            nivelAtividade
        )


        // Guarda os resultados
        setTmb(resultadoTmb)
        setGastoTotal(resultadoGastoTotal)
    }


    // ============================================================
    // CLASSIFICAÇÃO DA TMB
    // ============================================================

    const classificacao =
        tmb !== null
            ? classificarTMB(tmb)
            : ''


    // ============================================================
    // COR DO RESULTADO
    // ============================================================

    const cor =
        tmb !== null
            ? corDoTMB(tmb)
            : ''


    // ============================================================
    // INTERFACE
    // ============================================================

    return (

        <section className="pagina-calculo pagina-tmb">


            {/* ==================================================
                CABEÇALHO
                ================================================== */}

            <div className="calculo-cabecalho">

                <span className="calculo-icone">
                    🔥
                </span>

                <h1>
                    Calculadora de TMB
                </h1>

                <p>
                    Informe seus dados para estimar sua
                    Taxa Metabólica Basal e seu gasto
                    energético diário.
                </p>

            </div>


            {/* ==================================================
                FORMULÁRIO
                ================================================== */}

            <div className="formulario">


                {/* ------------------------------------------------
                    PESO
                    ------------------------------------------------ */}

                <label htmlFor="peso">
                    Peso (kg)
                </label>

                <input
                    id="peso"
                    type="number"
                    placeholder="Ex: 60"
                    value={peso}
                    onChange={(evento) =>
                        setPeso(evento.target.value)
                    }
                />


                {/* ------------------------------------------------
                    ALTURA
                    ------------------------------------------------ */}

                <label htmlFor="altura">
                    Altura (cm)
                </label>

                <input
                    id="altura"
                    type="number"
                    placeholder="Ex: 165"
                    value={altura}
                    onChange={(evento) =>
                        setAltura(evento.target.value)
                    }
                />


                {/* ------------------------------------------------
                    IDADE
                    ------------------------------------------------ */}

                <label htmlFor="idade">
                    Idade
                </label>

                <input
                    id="idade"
                    type="number"
                    placeholder="Ex: 25"
                    value={idade}
                    onChange={(evento) =>
                        setIdade(evento.target.value)
                    }
                />


                {/* ------------------------------------------------
                    SEXO
                    ------------------------------------------------ */}

                <label htmlFor="sexo-tmb">
                    Sexo
                </label>

                <select
                    id="sexo-tmb"
                    value={sexo}
                    onChange={(evento) =>
                        setSexo(evento.target.value)
                    }
                >

                    <option value="feminino">
                        Feminino
                    </option>

                    <option value="masculino">
                        Masculino
                    </option>

                </select>


                {/* ------------------------------------------------
                    NÍVEL DE ATIVIDADE
                    ------------------------------------------------ */}

                <label htmlFor="atividade-tmb">
                    Nível de atividade física
                </label>

                <select
                    id="atividade-tmb"
                    value={nivelAtividade}
                    onChange={(evento) =>
                        setNivelAtividade(evento.target.value)
                    }
                >

                    {Object.entries(FATORES_ATIVIDADE).map(
                        ([chave, { rotulo }]) => (

                            <option
                                key={chave}
                                value={chave}
                            >
                                {rotulo}
                            </option>

                        )
                    )}

                </select>


                {/* ------------------------------------------------
                    BOTÃO
                    ------------------------------------------------ */}

                <button onClick={calcular}>
                    Calcular TMB
                </button>

            </div>


            {/* ==================================================
                RESULTADO
                ================================================== */}

            {tmb !== null && (

                <div className={`resultado ${cor}`}>

                    <h2>
                        Resultado
                    </h2>


                    {/* --------------------------------------------
                        TMB
                        -------------------------------------------- */}

                    <p>
                        Sua Taxa Metabólica Basal:
                    </p>

                    <strong className="resultado-valor">
                        {formatarNumero(tmb)}
                        {' '}
                        kcal/dia
                    </strong>


                    <p>
                        Classificação:
                    </p>

                    <strong className="resultado-classificacao">
                        {classificacao}
                    </strong>


                    {/* --------------------------------------------
                        GASTO TOTAL
                        -------------------------------------------- */}

                    <div className="resultado-gasto">

                        <p>
                            Gasto energético total estimado:
                        </p>

                        <strong>
                            {formatarNumero(gastoTotal)}
                            {' '}
                            kcal/dia
                        </strong>

                    </div>

                </div>

            )}

        </section>
    )
}


export default Tmb

