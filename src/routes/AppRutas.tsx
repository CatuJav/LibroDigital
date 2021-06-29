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
import { CargarDanio } from '../pages/CargarDanio';

export const AppRutas = () => {
    return (
        <Router>
      <div>
       
        {/*Poner los enlaces antes de / porque sino solo se redirige a raiz*/}
        <Switch>
          
          <Route path='/cargaD' component={CargarDanio}/>
          <Route path='/piramide' component={PiramidePage}/>
          <Route path='/' component={InicioPage}/>

        </Switch>
      </div>
    </Router>
    )
}
