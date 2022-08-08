import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './components/main/Layout';
import Home from './components/main/Home';
import UsedList from './components/main/UsedList';
import ShowPart from './components/main/ShowPart';
import NewList from './components/main/NewList';
import Login from './components/main/Login';
import React, {useState} from 'react';







function App() {
  const API_URL='http://localhost/';
  const [loggedIn, setLoggedIn] = useState(false);
  const login = () => {
    setLoggedIn(true);
  };
  const routes = [
    { path: '/', element: <Home/> },
    { path: '/used-parts', element: <UsedList/> },
    { path: '/new-parts', element: <NewList/> },
    { path: '/login', element: <Login  login={login}/> },
  
  ]
  return (
    
    <BrowserRouter>
      <Routes>
          
          { routes.map(route =>{
            return(
              <Route
              path={route.path}
              element={<Layout>{route.element}</Layout>}
              />
            )
          })

          }
          <Route path='/part' >
              <Route path=':partId' element={<Layout><ShowPart URL={API_URL}/></Layout>}/>
            </Route>

          
          
      </Routes>
    </BrowserRouter>

  );
}

export default App;
