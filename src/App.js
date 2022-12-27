import Routers from './Routes';
import Background from './img/Background.svg';

function App() {

  return (
    <div className="App" 
      style={{
        backgroundImage: `url(${Background})`
      }}
    >
      <h1>
        Teste
      </h1>
    </div>
  );
}

export default App;
