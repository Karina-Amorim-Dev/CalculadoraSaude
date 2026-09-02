import { useState } from 'react'

import {
    calcularHidratacaoLitros,
    litrosParaCopos
} from '../utils/calculosSaude.js'

import { formatarNumero } from '../utils/formatarNumero.js'


function Hidratacao() {

    // ============================================================
    // ESTADO DO CAMPO PESO
    // ============================================================

    const [peso, setPeso] = useState('')


    // Guarda o resultado do cálculo
    const [resultado, setResultado] = useState(null)


    // ============================================================
    // FUNÇÃO PARA CALCULAR A HIDRATAÇÃO
    // A lógica original foi mantida
    // ============================================================

    function calcular() {

        // Converte o peso para número
        const pesoNumero = Number(peso)


        // Verifica se o peso é válido
        if (pesoNumero <= 0) {

            alert('Digite um peso válido.')

            return
        }


        // Calcula a quantidade de litros
        const litros = calcularHidratacaoLitros(
            pesoNumero
        )


        // Converte litros para quantidade de copos
        const copos = litrosParaCopos(
            litros
        )


        // Guarda os resultados
        setResultado({
            litros,
            copos
        })
    }


    // ============================================================
    // INTERFACE
    // ============================================================

    return (

        <section className="pagina-calculo pagina-hidratacao">


            {/* ==================================================
                CABEÇALHO
                ================================================== */}

            <div className="calculo-cabecalho">

                <span className="calculo-icone">
                    💧
                </span>

                <h1>
                    Calculadora de Hidratação
                </h1>

                <p>
                    Informe seu peso para descobrir uma
                    estimativa da quantidade de água que
                    você deve consumir diariamente.
                </p>

            </div>


            {/* ==================================================
                FORMULÁRIO
                ================================================== */}

            <div className="formulario">


                {/* ------------------------------------------------
                    PESO
                    ------------------------------------------------ */}

                <label htmlFor="peso-hidratacao">
                    Peso (kg)
                </label>

                <input
                    id="peso-hidratacao"
                    type="number"
                    step="0.1"
                    placeholder="Ex: 60"
                    value={peso}
                    onChange={(evento) =>
                        setPeso(evento.target.value)
                    }
                />


                {/* ------------------------------------------------
                    BOTÃO
                    ------------------------------------------------ */}

                <button onClick={calcular}>
                    Calcular Hidratação
                </button>

            </div>


            {/* ==================================================
                RESULTADO
                ================================================== */}

            {resultado && (

                <div className="resultado resultado-hidratacao">

                    <h2>
                        Resultado
                    </h2>


                    {/* --------------------------------------------
                        QUANTIDADE DE LITROS
                        -------------------------------------------- */}

                    <p>
                        Quantidade estimada:
                    </p>

                    <strong className="resultado-valor">
                        {formatarNumero(
                            resultado.litros,
                            2
                        )}
                        {' '}
                        litros por dia
                    </strong>


                    {/* --------------------------------------------
                        QUANTIDADE DE COPOS
                        -------------------------------------------- */}

                    <div className="resultado-copos">

                        <p>
                            Aproximadamente:
                        </p>

                        <strong>
                            {resultado.copos}
                            {' '}
                            copos de 250 ml por dia
                        </strong>

                    </div>

                </div>

            )}

        </section>
    )
}


export default Hidratacao

