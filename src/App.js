import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Appbar from './components/Appbar';
import Trainee from './components/Trainee';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Appbar />
      <Router>
       
        <Routes> {/* Wrap routes in <Routes> */}
          <Route exact path="/" element={<Register />} /> {/* Use 'element' prop */}
          <Route path="/admin" element={<Trainee />} /> {/* Use 'element' prop */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
