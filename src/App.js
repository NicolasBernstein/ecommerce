import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Menu from './components/menu';
import Footer from './components/footer';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Menu />
      <Routes>
        <Route exact path="/"></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
