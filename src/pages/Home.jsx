import { NavLink } from 'react-router-dom'

function Home() {
    return (
        <section className="pagina home">

            {/* =====================================================
                CABEÇALHO DA PÁGINA
                ===================================================== */}

            <div className="home-cabecalho">

                <span className="home-icone">
                    ❤️
                </span>

                <h1>
                    Calculadora de Saúde
                </h1>

                <p>
                    Ferramentas simples para acompanhar
                    informações importantes sobre sua saúde.
                </p>

            </div>


            {/* =====================================================
                CARTÕES DAS CALCULADORAS
                ===================================================== */}

            <div className="home-cards">

                {/* -------------------------------------------------
                    CARTÃO IMC
                    ------------------------------------------------- */}

                <NavLink to="/imc" className="home-card">

                    <span className="home-card-icone">
                        ⚖️
                    </span>

                    <h2>
                        IMC
                    </h2>

                    <p>
                        Calcule seu Índice de Massa Corporal
                        e veja sua classificação.
                    </p>

                    <span className="home-card-link">
                        Calcular →
                    </span>

                </NavLink>


                {/* -------------------------------------------------
                    CARTÃO TMB
                    ------------------------------------------------- */}

                <NavLink to="/tmb" className="home-card">

                    <span className="home-card-icone">
                        🔥
                    </span>

                    <h2>
                        Taxa Metabólica
                    </h2>

                    <p>
                        Estime sua taxa metabólica basal
                        e seu gasto energético diário.
                    </p>

                    <span className="home-card-link">
                        Calcular →
                    </span>

                </NavLink>


                {/* -------------------------------------------------
                    CARTÃO HIDRATAÇÃO
                    ------------------------------------------------- */}

                <NavLink to="/hidratacao" className="home-card">

                    <span className="home-card-icone">
                        💧
                    </span>

                    <h2>
                        Hidratação
                    </h2>

                    <p>
                        Descubra uma estimativa da quantidade
                        de água para consumir diariamente.
                    </p>

                    <span className="home-card-link">
                        Calcular →
                    </span>

                </NavLink>

            </div>


            {/* =====================================================
                SEÇÃO EXPLICATIVA
                ===================================================== */}

            <div className="home-info">

                <h2>
                    Como funciona?
                </h2>

                <p className="home-info-intro">
                    Escolha uma das calculadoras acima e informe
                    seus dados para obter uma estimativa.
                </p>


                {/* =================================================
                    EXPLICAÇÕES
                    ================================================= */}

                <div className="home-info-cards">


                    {/* -------------------------------------------------
                        EXPLICAÇÃO DO IMC
                        ------------------------------------------------- */}

                    <div className="home-info-item">

                        <span className="home-info-icon">
                            ⚖️
                        </span>

                        <h3>
                            IMC
                        </h3>

                        <p>
                            O Índice de Massa Corporal relaciona
                            peso e altura para apresentar uma
                            classificação do IMC.
                        </p>

                    </div>


                    {/* -------------------------------------------------
                        EXPLICAÇÃO DA TMB
                        ------------------------------------------------- */}

                    <div className="home-info-item">

                        <span className="home-info-icon">
                            🔥
                        </span>

                        <h3>
                            Taxa Metabólica
                        </h3>

                        <p>
                            A TMB estima a quantidade de energia
                            que o organismo utiliza em repouso.
                            Também é possível estimar o gasto
                            energético diário.
                        </p>

                    </div>


                    {/* -------------------------------------------------
                        EXPLICAÇÃO DA HIDRATAÇÃO
                        ------------------------------------------------- */}

                    <div className="home-info-item">

                        <span className="home-info-icon">
                            💧
                        </span>

                        <h3>
                            Hidratação
                        </h3>

                        <p>
                            A calculadora utiliza o peso informado
                            para apresentar uma estimativa de
                            consumo diário de água.
                        </p>

                    </div>

                </div>


                {/* =================================================
                    AVISO
                    ================================================= */}

                <div className="home-aviso">

                    <strong>
                        Importante:
                    </strong>

                    {' '}

                    Os resultados apresentados são estimativas
                    para fins informativos e não substituem a
                    avaliação ou orientação de um profissional
                    de saúde.

                </div>

            </div>

        </section>
    )
}

export default Home