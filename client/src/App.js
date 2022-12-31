import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './styles/App.css';
import Title from './components/Title';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Title />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;

