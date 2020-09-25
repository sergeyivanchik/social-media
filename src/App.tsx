import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.scss'

import Header from './components/Header'
import User from './pages/User'
import Messages from './pages/Messages'
import Chat from './pages/Chat'


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header/>

      <div className='container'>
        <div className='wrapper'>
          <Switch>
            <Route exact path='/:id'>
              <User/>
            </Route>
            <Route exact path='/messages/:userId'>
              <Messages/>
            </Route>
            <Route exact path='/chat/:id'>
              <Chat/>
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
