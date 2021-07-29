import React from "react";
import { InicioPage } from "../pages/InicioPage";
import { PiramidePage } from "../pages/PiramidePage";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import { LesionesPage } from "../pages/LesionesPage";
import { Lesiones2Page } from "../pages/Lesiones2Page";
import { Ejercicios1Page } from "../pages/Ejercicios1Page";
import { Ejercicios2Page } from "../pages/Ejercicios2Page";
import { Ejercicios3Page } from "../pages/Ejercicios3Page";
import { Ejercicios4Page } from "../pages/Ejercicios4Page";
import { ManipularCargas } from "../pages/ManipularCargasPage";
import { CargarDanio } from "../pages/CargarDanio";
import { AlimentacioSanaPage } from "../pages/AlimentacioSanaPage";
import { ManipularCargasS } from "../pages/ManipularCargasS";
import { Postura1Page } from '../pages/Postura1Page';
import { Postura2Page } from "../pages/Postura2Page";
import { PaginaUsoAdecuado } from "../pages/catu/PaginaUsoAdecuado";
import { PaginaConsecuencias } from "../pages/sebas/PaginaConsecuencias";
import { ChumbiPage } from "../pages/gene/ChumbiPage";
import { UsoChumbi1 } from "../pages/conte/UsoChumbi1";
import { UsoChumbi2 } from "../pages/conte/UsoChumbi2";
import { PupitrePage } from "../pages/efejotajumbo/PupitrePage";
import { CuidadoPage } from "../pages/efejotajumbo/CuidadoPage";

export const AppRutas = () => {
  return (
    <Router>
      <div>
        {/*Poner los enlaces antes de / porque sino solo se redirige a raiz*/}
        <Switch>
          {/* Catujav */}
          <Route path="/sana" component={AlimentacioSanaPage} />
          <Route path="/piramide" component={PiramidePage} />
          <Route path="/usoadecuado" component={PaginaUsoAdecuado} />



          {/* Conte */}

          <Route path="/ejercicios1" component={Ejercicios1Page} />
          <Route path="/ejercicios2" component={Ejercicios2Page} />
          <Route path="/ejercicios3" component={Ejercicios3Page} />
          <Route path="/ejercicios4" component={Ejercicios4Page} />
          <Route path="/uso1" component={UsoChumbi1} />
          <Route path="/uso2" component={UsoChumbi2} />


          {/*Jumbo */}
          <Route path="/postura1" component={Postura1Page}/>
          <Route path="/postura2" component={Postura2Page}/>
          <Route path='/cuidado' component={CuidadoPage}/>


          {/* Efejoto */}

          <Route path="/lesiones" component={LesionesPage} />
          <Route path="/lesionesb" component={Lesiones2Page} />
          <Route path='/pupitre' component={PupitrePage}/>



          {/* Trax */}
          <Route path="/cargaD" component={CargarDanio} />
          <Route path="/manipularCargaD" component={ManipularCargasS} />
          <Route path="/consecuenciasChumbi" component={PaginaConsecuencias} />



          {/* Gene */}
          <Route path="/ManipulacionCargas" component={ManipularCargas} />
          <Route path="/Chumbi" component={ChumbiPage} />


          {/*NOTA Dejar al último */}
          <Route path="/" component={InicioPage} />
        </Switch>
      </div>
    </Router>
  );
};
