
import './App.css';
import Main from'./Main'
import Nav from './Nav'
import Book from'./Book'
import Footer from'./Footer'
import Reservepage from './Reservepage'


function App() {
  return (
    <div className="App">
      <header>

      </header>
      <nav>
        <Nav/>
      </nav>
      <main>
        <Book/>
        <Main/>
        <Reservepage/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
