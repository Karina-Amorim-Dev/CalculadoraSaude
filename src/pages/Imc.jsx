import { useState } from 'react'
import {
  calcularIMC,
  classificarIMC,
  corDoIMC
} from '../utils/calculosSaude.js'

import { formatarNumero } from '../utils/formatarNumero.js'


function Imc() {

  // ============================================================
  // ESTADOS DOS CAMPOS
  // ============================================================

  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')

  // Guarda o resultado do cálculo
  const [resultado, setResultado] = useState(null)


  // ============================================================
  // FUNÇÃO PARA REALIZAR O CÁLCULO
  // A lógica original foi mantida
  // ============================================================

  function handleCalcular(evento) {

    // Impede o comportamento padrão do formulário
    evento.preventDefault()

    // Converte os valores para número
    const pesoNumero = parseFloat(peso)
    const alturaNumero = parseFloat(altura)


    // Validação dos campos
    if (
      isNaN(pesoNumero) ||
      isNaN(alturaNumero) ||
      pesoNumero <= 0 ||
      alturaNumero <= 0
    ) {

      alert('Preencha peso e altura com valores válidos!')

      return
    }


    // Calcula o IMC
    const imc = calcularIMC(
      pesoNumero,
      alturaNumero
    )


    // Descobre a classificação
    const categoria = classificarIMC(imc)


    // Define a classe visual do resultado
    const corClasse = corDoIMC(imc)


    // Guarda todas as informações do resultado
    setResultado({
      imc,
      categoria,
      corClasse
    })
  }


  // ============================================================
  // INTERFACE
  // ============================================================

  return (

    <section className="pagina-calculo pagina-imc">


      {/* ======================================================
          CABEÇALHO
          ====================================================== */}

      <div className="calculo-cabecalho">

        <span className="calculo-icone">
          ⚖️
        </span>

        <h1>
          Cálculo do IMC
        </h1>

        <p>
          Informe seu peso e sua altura para calcular
          o Índice de Massa Corporal.
        </p>

      </div>


      {/* ======================================================
          FORMULÁRIO
          ====================================================== */}

      <form
        onSubmit={handleCalcular}
        className="formulario"
      >


        {/* ----------------------------------------------------
            CAMPO PESO
            ---------------------------------------------------- */}

        <label htmlFor="peso-imc">
          Peso (kg)
        </label>

        <input
          id="peso-imc"
          type="number"
          step="0.1"
          placeholder="Ex: 60"
          value={peso}
          onChange={(evento) =>
            setPeso(evento.target.value)
          }
        />


        {/* ----------------------------------------------------
            CAMPO ALTURA
            ---------------------------------------------------- */}

        <label htmlFor="altura-imc">
          Altura (m)
        </label>

        <input
          id="altura-imc"
          type="number"
          step="0.01"
          placeholder="Ex: 1.65"
          value={altura}
          onChange={(evento) =>
            setAltura(evento.target.value)
          }
        />


        {/* ----------------------------------------------------
            BOTÃO
            ---------------------------------------------------- */}

        <button type="submit">
          Calcular IMC
        </button>

      </form>


      {/* ======================================================
          RESULTADO
          Só aparece depois que o cálculo for realizado
          ====================================================== */}

      {resultado && (

        <div
          className={`resultado ${resultado.corClasse}`}
        >

          <h2>
            Resultado
          </h2>


          <p>
            Seu IMC:
          </p>

          <strong className="resultado-valor">
            {formatarNumero(resultado.imc, 1)}
          </strong>


          <p>
            Classificação:
          </p>

          <strong className="resultado-classificacao">
            {resultado.categoria}
          </strong>

        </div>

      )}

    </section>
  )
}


export default Imc

