import Routers from './Routes';
import Background from './img/Background.svg';

function App() {

  return (
    <div className="App" 
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
      }}
    >
      <Routers />
    </div>
  );
}

export default App;
