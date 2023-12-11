import "./App.css"
import Kratos from "./assets/Kratos Backend.png"
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";

function App() {
  return (
    <div className="App">
      <h1>Iniciando a seção 3</h1>
      {/*Imagem via public */}
      <div>
        <img src="/Kratos escrevendo.png" alt="Personagem Kratos escrevendo"/>
      </div>
      {/*Imagem via Assets */}
      <div>
        <img src={Kratos} alt="Kratos como desenvolvedor back end"/>
      </div>

      <ManageData/>

      <ListRender/>
    </div>
  );
}

export default App;
