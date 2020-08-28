import React from 'react';
import  ReactDOM  from  'react-dom' ;
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import  CadastroVideo  from  './pages/cadastro/Video' ;
import  CadastroCategoria  from './pages/cadastro/Categoria'

// master blaster challenge in description
// Put a game on this page: https://www.youtube.com/watch?v=jOAU81jdi-c :)

const Page404 = () => (<div>Page404</div>)

ReactDOM.render (
  <BrowserRouter>
    <Switch>
      <Route path="/"component={Home}exact/>
      < Route  path="/cadastre/video"component={CadastroVideo}/>
      < Route  path="/ registration/category"component = {CadastroCategoria}/>
      < Route  component={Page404}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
) ;