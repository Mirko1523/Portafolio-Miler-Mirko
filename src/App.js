import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './componentes/home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        
      </Routes>
    </div>
  );
}

export default App;
