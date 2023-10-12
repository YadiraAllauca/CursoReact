import logo from './logo.svg';
import './App.css';
import Contadores from './componentes/contadores';

function App() {
  return (
    <div className="App">
      <Contadores value={4} />
    </div>
  );
}

export default App;
