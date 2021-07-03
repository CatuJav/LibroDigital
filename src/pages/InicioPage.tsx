import React from "react";
import {useHistory } from "react-router-dom";
import '../themes/estilos.css';
import  tituloImg  from '../assets/tituloPrincipal.png';
//Assets
import inicioImg from "../assets/inicioImg.jpg";
import useWindowDimensions from "../hooks/useWindowDimensions";

export const InicioPage = () => {
  const history=useHistory();
  const { height, width } = useWindowDimensions();

  const irAPiramide=()=>{
    history.push('/piramide');
    //console.log('clic')
  }

  return (
    <div
      //style={{backgroundColor:'red'}}
    >
       <img
        src={inicioImg}
        alt="InicioImg"
        width={width}
        height={height}
        style={{ position: "absolute", zIndex: -99}}
      /> 
      <div className="" style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
        <img src={tituloImg} width="70%"/>
      </div>
      <div style={{
          //backgroundColor:'red',
          position:'absolute',
          right:100,
          bottom:100,
          height:118/2,
          width:320/2
      }}>
        
        <button className="button"
         
          onClick={irAPiramide}
        >
          INICIAR
        </button>
      </div>
    </div>
  );
};
