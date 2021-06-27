import React from "react";

//Assets
import inicioImg from "../assets/inicioImg.jpg";
import useWindowDimensions from "../hooks/useWindowDimensions";

export const InicioPage = () => {
  const { height, width } = useWindowDimensions();

  return (
    <div
      
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
        <button
          style={{
            borderRadius: 8,
            backgroundColor: "#c9dee6",
            //borderColor: "transparent",
            fontSize: 36,
          }}
        >
          INICIAR
        </button>
      </div>
    </div>
  );
};
