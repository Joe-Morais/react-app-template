import './App.css';
import Sidenav from './components/sidenav';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidenav />
      </div>
    </Router>
    
  );
}

export default App;
