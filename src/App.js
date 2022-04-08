// external libraries
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// local imports
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';
import Events from './Pages/Events';
import Radio from './Pages/Radio';
import Contact from './Pages/Contact';

function App() {
  return (
    <Router className="App">
      <Header />
      <Routes >
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/radio" element={<Radio/>} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
