import React from "react";
import { useHistory } from "react-router-dom";
import "../themes/estiloAlimentacionSana.css";
import video6 from "../assets/videosPiramide/6Saludable.mp4";
import useWindowDimensions from "../hooks/useWindowDimensions";
import '../themes/estilos.css';
export const AlimentacioSanaPage = () => {
  const history = useHistory();
  const { height, width } = useWindowDimensions();
  
  const irAnterior = () => {
    history.push("/piramide");
  };
  const irSiguiente = () => {
    history.push("/ejercicios1");
  };
  const text=(<p>🥦La alimentación de un niño para mantener un cuerpo sano es una de las cosas mas importantes.
    <br/>🍗No olvides nunca el desayuno.<br/>
    🥩El almuerzo.<br/>
    🥐Y una comida en la noche
    </p>);
  return (
    <div style={{backgroundColor:"#83C4D7",height, paddingTop:"4%"}}>
      <div className="container">
        <div className="row align-items-center" style={{height:height-200, backgroundColor:"#1F4C4F",borderRadius:50}}>
          <div className="col-6">
            <div style={{color:"white",fontSize:25, textAlign:'justify' }}>{text}</div>
          </div>
          <div className="col-6">
          <video
                    style={{ borderRadius: 50, }}
                    width="100%"
                    //height="360"
                    controls
                    onPointerEnter={(e) => {
                      e.currentTarget.play();
                      console.log(e.currentTarget.ended);
                    }}
                    onPointerOut={(e) => {
                      e.currentTarget.pause();
                    }}
                  >
                    <source src={video6} type="video/mp4"></source>
                  </video>
          </div>
        </div>
        <div className="" style={{height:100,display:'flex', flexDirection:'row',justifyContent:'space-around', alignItems:'center'}}>
          <div className="">
            <button
              className="button"
              style={{
                //borderRadius: 8,
                //backgroundColor: "#c9dee6",
                //borderColor: "transparent",
                //fontSize: 30,
              }}
              onClick={irAnterior}
            >
              Anterior
            </button>
          </div>
          <div className="">
            <button
              className="button"
              style={{
                //borderRadius: 8,
                //backgroundColor: "#c9dee6",
                //borderColor: "transparent",
                //fontSize: 30,
                alignSelf:'end'
              }}
              onClick={irSiguiente}
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
