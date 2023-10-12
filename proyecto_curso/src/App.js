import logo from './logo.svg';
import './App.css';
import Contador from './componentes/contador';

function App() {
  return (
    <div className="App">
      <Contador value={4} />
    </div>
  );
}

export default App;
