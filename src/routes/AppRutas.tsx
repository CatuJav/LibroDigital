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

import { LesionesPage } from '../pages/LesionesPage';
import { Lesiones2Page } from '../pages/Lesiones2Page';
import { Ejercicios1Page } from '../pages/Ejercicios1Page';
import { ManipularCargas } from '../pages/ManipularCargasPage';
import { CargarDanio } from '../pages/CargarDanio';
import { AlimentacioSanaPage } from '../pages/AlimentacioSanaPage';
import { PupitrePage } from '../pages/PupitrePage';
import { CuidadoPage } from '../pages/CuidadoPage';

export const AppRutas = () => {
    return (
        <Router>
      <div>
       
        {/*Poner los enlaces antes de / porque sino solo se redirige a raiz*/}
        <Switch>

        <Route path='/lesiones' component={LesionesPage}/>
        <Route path='/lesionesb' component={Lesiones2Page}/>

          <Route path='/ejercicios1' component={Ejercicios1Page}/>

          <Route path='/ManipulacionCargas' component={ManipularCargas}/>
          
          <Route path='/cargaD' component={CargarDanio}/>

          <Route path='/sana' component={AlimentacioSanaPage}/>
          <Route path='/pupitre' component={PupitrePage}/>
          <Route path='/cuidado' component={CuidadoPage}/>

          <Route path='/piramide' component={PiramidePage}/>
          <Route path='/' component={InicioPage}/>
          

        </Switch>
      </div>
    </Router>
    )
}
