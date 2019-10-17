import React from 'react';
// import logo from './logo.svg';
import './scss/App.scss';
// import PresentDay from './components/PresentDay';
// import Hours from './components/Hours';
// import Days from './components/Days';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header/>
      </header>
      <section>
        {/* <PresentDay/> */}
        {/* <Hours/> */}
        {/* <Days/> */}
      </section>
      <Footer/>
    </div>
  );
}

export default App;
