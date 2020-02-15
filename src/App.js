import React from 'react';
import './App.css';
import Nav from './shared/Nav'
import { Routes }  from './routes'
import Footer from './shared/Footer'


class App extends React.Component {
  

  render () {
    return (
    <div className="App">
      <header>
        <Nav/>
      </header>
      <main>
        <Routes/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
  }
  
}

export default App;
