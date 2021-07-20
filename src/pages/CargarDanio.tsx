import React from 'react';
import useWindowDimensions from "../hooks/useWindowDimensions";
import { useHistory } from "react-router-dom";

import ninoscargados from "../assets/ninoscargados.png";
import cuidatuespalda from "../assets/cuidatuespalda.png";
import otrascargasdanio from "../assets/otrascargasquehacendanio.png";
import nubeletras from "../assets/nubeletras.png";
import '../themes/estilos.css';

export const CargarDanio = () => {
    const { height, width } = useWindowDimensions();
    const history = useHistory();
    const irAnterior=()=>{
        history.push("/lesionesb");
      }
    const irSiguiente=()=>{
        history.push("/manipularCargaD");
      }
    return (
        <div className="m-0 vh-100 row justify-content-center align-items-center" style={{ backgroundColor: "#83C4D7", width, height }}>
            <div className="col-auto p-5 text-center" style={{ backgroundColor: '#2A728B', width: '90%', height:'92%', borderRadius:'30px', borderStyle: 'solid', borderColor:'white', borderWidth: '4px'}}>
                <div className="row">
                    <div className="col-8">
                        <img src={otrascargasdanio} width="100%" />
                    </div>
                    <div className="col-2">
                                
                    </div>
                    <div className="col-2">
                    
                    </div>
                    
                </div>
                <br/>
                <div className="row">
                    <div className="col-8">
                    <img src={nubeletras} width="85%" />    
                    </div>
                    <div className="col-4">
                        <img src={cuidatuespalda} width="95%" />    
                        <img src={ninoscargados} width="85%" />
                    </div>

                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="float-md-left">
                                <button
                                className="button"
                                onClick={irAnterior}
                                id="anterior"
                                >
                                    Anterior
                                </button>
                         </div>
                    </div>
                    
                    <div className="col-6">
                    <div className="float-md-right">
                    <button
                            className="button"
                            onClick={irSiguiente}
                            id="siguiente"
                            >
                            Siguiente
                            </button>
                    </div>
                            
                    
                    </div>
                </div>
            </div>
        </div>
    )
}
