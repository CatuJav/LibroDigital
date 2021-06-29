import React from "react";
import {useHistory } from "react-router-dom";

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
      <h1 style={{ textAlign: "center", alignSelf: "center" }}>
        Cuidados de mi cuerpo
      </h1>
      <div style={{
          //backgroundColor:'red',
          position:'absolute',
          right:100,
          bottom:100,
          height:118/2,
          width:320/2
      }}>
        
        <button className="btn btn-info"
          style={{
            borderRadius: 8,
            //backgroundColor: "#c9dee6",
            //borderColor: "transparent",
            fontSize: 36,
          }}
          onClick={irAPiramide}
        >
          INICIAR
        </button>
      </div>
    </div>
  );
};
