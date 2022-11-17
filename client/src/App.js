import './styles/App.css';
import Title from './components/Title';
import GuitarsData from './components/GuitarsData';
import AddGuitar from './components/AddGuitar';


function App() {
  return (
    <div className="App">
      <Title />
      <GuitarsData />
      <AddGuitar />
    </div>
  );
}

export default App;

