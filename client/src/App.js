import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './styles/App.css';
import Title from './components/Title';
import Login from './pages/Login';
import Home from './pages/Home';
import User from './pages/User';

function App() {
  return (
    <div className="App">
      <Router>
        <Title />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/user' element={<User />}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;

