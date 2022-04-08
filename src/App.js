// external libraries
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// local imports
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';
import Events from './Pages/Events';
import Radio from './Pages/Radio';
import Contact from './Pages/Contact';
import Aside from './Components/Aside';
function App() {
  return (
    <Router className="App">
      <Header />
      <section className='body-container'>
      <Aside/>
      <Routes >
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/radio" element={<Radio/>} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
      </section>
      <Footer />
    </Router>
  );
}

export default App;
