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
import { Ejercicios2Page } from '../pages/Ejercicios2Page';
import { Ejercicios3Page } from '../pages/Ejercicios3Page';
import { Ejercicios4Page } from '../pages/Ejercicios4Page';
import { ManipularCargas } from '../pages/ManipularCargasPage';
import { CargarDanio } from '../pages/CargarDanio';
import { AlimentacioSanaPage } from '../pages/AlimentacioSanaPage';
import { ManipularCargasS } from '../pages/ManipularCargasS';

export const AppRutas = () => {
    return (
        <Router>
      <div>
       
        {/*Poner los enlaces antes de / porque sino solo se redirige a raiz*/}
        <Switch>
          {/* Efejoto */}
          <Route path='/lesiones' component={LesionesPage}/>
          <Route path='/lesiones' component={LesionesPage}/>
          <Route path='/lesionesb' component={Lesiones2Page}/>

          {/* Conte */}
        
          <Route path='/ejercicios1' component={Ejercicios1Page}/>
          <Route path='/ejercicios2' component={Ejercicios2Page}/>
          <Route path='/ejercicios3' component={Ejercicios3Page}/>
          <Route path='/ejercicios4' component={Ejercicios4Page}/>

          {/* Gene */}
          <Route path='/ManipulacionCargas' component={ManipularCargas}/>
          
          {/* Trax */}
          <Route path='/cargaD' component={CargarDanio}/>
          <Route path='/manipularCargaD' component={ManipularCargasS}/>

          {/* Catujav */}
          <Route path='/sana' component={AlimentacioSanaPage}/>
          <Route path='/piramide' component={PiramidePage}/>
          <Route path='/' component={InicioPage}/>
          

        </Switch>
      </div>
    </Router>
    )
}
