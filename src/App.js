import React from 'react';
import './App.css';
import BankApp from './BankApp';
import { Navbar, Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Banking App</Navbar.Brand>
        </Container>
      </Navbar>
      <BankApp />
    </div>
  );
}

export default App;
