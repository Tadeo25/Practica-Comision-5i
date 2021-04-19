import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import Form from './pages/Form';
// import Articulos from './pages/Articulo'
import { useState } from 'react'
import UserRoutes from './UserRoutes'
import NotFound404 from './pages/NotFound'



function App() {
  const [isAdmin, setIsAdmin] = useState(false)

  const [user, setUser] = useState('')


  return isAdmin ? (
    <AdminDashboard />
  ) : (
    <Router>
      <Switch>
        <Route path='/404' exact>
            <NotFound404 />
        </Route>
        <UserRoutes loginAsAdmin={() => setIsAdmin(true)} user={user} setUser={setUser} />
      </Switch>
    </Router>
  );
}

function AdminDashboard() {
  return <div>Panel Admin</div>
}








export default App;
