import React from 'react';
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useHistory } from "react-router-dom";
import '../../themes/estilos.css';

import titulochumbi from "../../assets/chumbitext.png";
import chumbi from "../../assets/CHAMBIS.png";
import ninia from "../../assets/ninia.jpg";


export const ChumbiPage = () => {
        const { height, width } = useWindowDimensions();
    const history = useHistory();
    const irAnterior=()=>{
        history.push("/ManipulacionCargas");
      }
    const irSiguiente=()=>{
        history.push("/uso1");
      }
    const texto1=(<p><b>Faja que usan las indígenas de sudamérica: Ecuador,Bolivia, Perú y Chile</b>
    </p>);
    
    
    return (
        <div className="m-0 vh-100 row justify-content-center align-items-center" style={{ backgroundColor: "#83C4D7", width, height}}>
           <div >
           <div  className="row">
           <div className="col-4">
            </div>
            <div className="col-4">
            <img src={titulochumbi} width="90%" />
            </div>
            <div className="col-4">
            </div>
               
            </div>
            </div>
            <div className="col-auto p-5 text-center" style={{ backgroundColor: '#1F4C4F', width: '90%', height:'75%', borderRadius:'30px'}}>
               
                <div className="row">
                    <div className="col-4">
                        <div className="col-auto text-center" style={{ width: '90%', height:'100%', borderRadius:'10px', marginTop:'-10px'}}>
                            <br/>
                          <br></br>
                          <br></br>
                            <div className="row">
                                <img src={chumbi} height="100%" style={{transform: "rotate(90deg)"}} />
                            </div>
                            <br/><br/>
                            
                        </div>
                    </div>
                 
                    <div className="col-4">
                    <br></br>
                    <br></br>
                        <div className="row">
                        
                            <div className="container-fluid row p-5 text-center" style={{ backgroundColor: '#98B2BA', width: '100%', height:'75%', borderRadius:'10px', marginTop:'-10px'}}>
                            
                            <div className="row" style={{color:"white",fontSize:30, textAlign:'center' }}>
                            {texto1}
                                </div>
                              
                                
                            </div>
                        </div>
                        <br/>
                      
                    </div>
                    <div className="col-4">
                        <div className="col-auto text-center" style={{ backgroundColor: '#98B2BA', width: '90%', height:'100%', borderRadius:'10px', marginTop:'-10px'}}>
                             <div className="row">
                                <img src={ninia} width="100%" />
                             </div>
                
                        </div>
                    </div>
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
    )
}

