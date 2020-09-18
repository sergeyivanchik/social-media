import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.scss'

import Header from './components/Header'
import User from './pages/User'



const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header/>

      <div className='container'>
        <div className='wrapper'>
          <Route path='/:id'>
            <User/>
          </Route>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
