import React from 'react';
import useWindowDimensions from "../hooks/useWindowDimensions";
import { useHistory } from "react-router-dom";
import manipularcargas from "../assets/manipulacionCargas.png";
import chicomochila from "../assets/chicoconmochila.png";
import '../themes/estilos.css';


export const ManipularCargasS = () => {
    const { height, width } = useWindowDimensions();
    const history = useHistory();
    const irAnterior=()=>{
        history.push("/cargaD");
      }
    const irSiguiente=()=>{
        history.push("/ManipulacionCargas");
      }
    return (
        <div className="m-0 vh-100 row justify-content-center align-items-center" style={{ backgroundColor: "#83C4D7", width, height }}>
            <div className="col-auto p-5 text-center" style={{ backgroundColor: '#2A728B', width: '90%', height:'85%', borderRadius:'30px', borderStyle: 'solid', borderColor:'white', borderWidth: '4px'}}>
                <div className="row">
                    <div className="container">
                        <img src={manipularcargas} width="75%" />
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-4">
                        <div className="row">
                            <div style={{ backgroundColor: '#FFFFFF', borderStyle: 'solid', borderColor:'#03384B', borderWidth: '10px'}}>
                                <br/>
                                <p>
                                    Los daños causados en nuestro cuerpo por cargar bultos muy pesados es un grave problema a nivel mundial.
                                </p>
                                <br/>
                            </div>
                        </div>
                        <div className="row">
                            <br/><br/><br/>
                        </div>
                        <div className="row">
                        <div style={{ backgroundColor: '#FFFFFF', borderStyle: 'solid', borderColor:'#03384B', borderWidth: '10px'}}>
                                <br/>
                                <p>
                                Las mujeres que trabajan en el campo y cargan bultos muy pesados y en posiciones incómodas presentan en su vejez graves problemas en su columna.
                                </p>
                                <br/>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <img src={chicomochila} width="100%" />
                    </div>
                    <div className="col-4">
                        <div className="row">
                            <br/><br/><br/><br/><br/>
                        </div>
                        <div className="row">
                        <   div style={{ backgroundColor: '#FFFFFF', borderStyle: 'solid', borderColor:'#03384B', borderWidth: '10px'}}>
                                <br/>
                                <p>
                                    Se dañan los tendones, músculos, y nervios.
                                </p>
                                <br/>
                            </div>
                        </div>
                        <br/><br/><br/><br/><br/>
                        <div className="row">
                            
                            <div className="col-3">
                                <button
                                className="grow_ellipse"
                                style={{
                                borderRadius: 30,
                                fontSize: 25,
                                }}
                                onClick={irAnterior}
                                >
                                    Anterior
                                </button>
                            </div>
                            <div className="col-4"></div>
                            <div className="col-2">
                                <button
                                className="grow_ellipse"
                                style={{
                                borderRadius: 30,
                                fontSize: 25,
                                }}
                                onClick={irSiguiente}
                                >
                                    Siguiente
                                </button>
                            </div>
                            <div className="col-3"></div>
                       
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
