import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Form from './pages/Form';
import Articulos from './pages/Articulo'


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/formulario">
          <Form />
        </Route>
        <Route path="/articulos">
          <Articulos />
        </Route>
        <Route path="/">
          Home
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
