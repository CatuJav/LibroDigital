import React from 'react'
import { InicioPage } from '../pages/InicioPage';
import { PiramidePage } from '../pages/PiramidePage';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import { AlimentacioSanaPage } from '../pages/AlimentacioSanaPage';

export const AppRutas = () => {
    return (
        <Router>
      <div>
       
        {/*Poner los enlaces antes de / porque sino solo se redirige a raiz*/}
        <Switch>
          <Route path='/sana' component={AlimentacioSanaPage}/>
          <Route path='/piramide' component={PiramidePage}/>
          <Route path='/' component={InicioPage}/>

        </Switch>
      </div>
    </Router>
    )
}
