import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Notes from './components/Notes.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Notes />
      <Footer />
    </div>
  );
}

export default App;
