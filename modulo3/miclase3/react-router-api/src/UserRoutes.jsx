import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import {
  BrowserRouter as 
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// import Form from './pages/Form';
// import Articulos from './pages/Articulo'
import Movies from './pages/Movies';
import Footer from './components/Footer';
import Login from './pages/Login';
import Details from './pages/Details'



export default function UserRoutes(props) {
    const { loginAsAdmin, user, setUser } = props;
    return (
        <Route path="/">
            <Header user={user} />
            <Switch>
                <Route path="/harry-potter">
                    <Movies />
                </Route>
                <Route path="/details/:idMovie">
                    <Details />
                </Route>
                <Route path="/login">
                    <Login loginAsAdmin={loginAsAdmin} setUser={setUser} />
                </Route>
                <Route path="/" exact>
                    Home
                </Route>
                <Route path='/'>
                    <Redirect to="/404" />
                </Route>
            </Switch>
            <Footer />
        </Route>
    );
}