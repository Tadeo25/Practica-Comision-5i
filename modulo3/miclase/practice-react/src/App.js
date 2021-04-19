import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Header from './Header';
import Main from './Main';
import React, { useState } from 'react';
import Personas from './Personas';
import Form from './Form';
import Articulos from './Articulo';

function App() {
  const [section, setSection] = useState('principal')
  const info = {
    tittle: "Mi titulo",
    descripcion: "Some quick example text to build on the card"
  }
  return (
    <div className="App">
      <Header logo={logo} changeSection={setSection} />
      {
        section == 'principal' && (
          <div>
            <Main data={info} />
            {/* <Button variant="primary">Primary</Button> */}
            <Example />
            <Personas />
          </div>
        )
      }
        {section == 'formulario' && (<Form />)}
        {section == 'articulos' && (<Articulos />)}

    </div>
  );
}

function Example() {
  // Declaración de una variable de estado que llamaremos "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default App;
