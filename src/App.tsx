import React, { useState } from 'react';
import { InicioPage } from './pages/InicioPage';
const electron =window.require('electron');
const remote= electron.remote;
const {dialog}=remote;


function App() {

  return (
    <>
     <InicioPage/>
    </>
  );
}

export default App;
