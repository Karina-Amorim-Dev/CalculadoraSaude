// App.jsx
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Imc from './pages/Imc.jsx'
import Tmb from './pages/Tmb.jsx'
import Hidratacao from './pages/Hidratacao.jsx'
 
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="imc" element={<Imc />} />
        <Route path="tmb" element={<Tmb />} />
        <Route path="hidratacao" element={<Hidratacao />} />
      </Route>
    </Routes>
  );
}
 
export default App
