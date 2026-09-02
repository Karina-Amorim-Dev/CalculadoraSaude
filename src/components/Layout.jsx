import { Outlet } from 'react-router-dom'
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="app-container">
      <Navbar />

      <main className="conteudo">
        <Outlet />
      </main>

      <footer className="rodape">
        <p>Projeto didático &copy; Curso de React — Calculadora de Saúde</p>
      </footer>
    </div>
  )
}

export default Layout