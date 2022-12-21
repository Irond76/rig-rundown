import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './styles/App.css';
import Title from './components/Title';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Title />
          <Routes>
            <Route path='/' element={<Login />}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;

