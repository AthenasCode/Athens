import Header from "./components/Header"
import Main from "./components/Main";
import { amenazas, debilidades, fortalezas, oportunidades } from "./utils/data";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
    <Header title="Curso React.js" />
    <Main name="María" debilidades={debilidades} fortalezas={fortalezas} amenazas={amenazas} oportunidades={oportunidades}/>
    </div>
  );
}

export default App
