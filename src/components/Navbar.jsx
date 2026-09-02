import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">

      {/* =====================================================
          LOGO / TÍTULO
          Ao clicar, volta para a página inicial
          ===================================================== */}

      <NavLink
        to="/"
        className="navbar-titulo"
      >
        ❤️ Calculadora de Saúde
      </NavLink>


      {/* =====================================================
          MENU PRINCIPAL
          ===================================================== */}

      <ul className="nav-links">

        {/* -------------------------------------------------
            IMC
            ------------------------------------------------- */}

        <li>
          <NavLink
            to="/imc"
            className={({ isActive }) =>
              isActive ? 'link-ativo' : ''
            }
          >
            ⚖️ IMC
          </NavLink>
        </li>


        {/* -------------------------------------------------
            TMB
            ------------------------------------------------- */}

        <li>
          <NavLink
            to="/tmb"
            className={({ isActive }) =>
              isActive ? 'link-ativo' : ''
            }
          >
            🔥 Taxa Metabólica
          </NavLink>
        </li>


        {/* -------------------------------------------------
            HIDRATAÇÃO
            ------------------------------------------------- */}

        <li>
          <NavLink
            to="/hidratacao"
            className={({ isActive }) =>
              isActive ? 'link-ativo' : ''
            }
          >
            💧 Hidratação
          </NavLink>
        </li>

      </ul>

    </nav>
  )
}

export default Navbar

