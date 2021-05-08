import React from 'react';
import './App.css';
import Header from "./Components/Header.js";
import Sidebar from "./Components/Sidebar";
import Welcome from './Components/Welcome';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from './Components/Chat';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {

  const [{user}, dispatch] = useStateValue();


  return (
    <div className="App">
      <Router>

        {!user ? (
          <Login />
        ) : (
          <>
              <Header />
              <div className="app__body">
                <Sidebar />

                <Switch>

                  <Route path="/room/:roomId">
                    <Chat />
                  </Route>

                  <Route path="/">
                     <Welcome />
                  </Route>

                </Switch>
              </div>
          </>
            )}

      </Router>
    </div>
  );
}

export default App;
