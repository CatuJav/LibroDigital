import React from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useHistory } from "react-router-dom";
import "../../themes/estilos.css";

import tituloCon from "../../assets/tituloConsecuencias.png";
import imgCon1 from "../../assets/imgCon1.png";
import imgCon2 from "../../assets/imgCon2.png";
import imgCon3 from "../../assets/imgCon3.png";
import imgCon4 from "../../assets/imgCon4.png";

export const PaginaConsecuencias = () => {
  const { height, width } = useWindowDimensions();
  const history = useHistory();
  const irAnterior = () => {
    history.push("/uso2");
  };
  const irSiguiente = () => {
    history.push("/usoadecuado");
  };
  const texto1 = (
    <p>
      <b>Reducción de la cintura</b>
    </p>
  );
  const texto2 = (
    <p>
      <b>Desplazamiento de los órganos complicando la digestión</b>
    </p>
  );
  const texto3 = (
    <p>
      <b>Malformaciones de músculo, esqueléticas y debilidad muscular</b>
    </p>
  );
  const texto4 = (
    <p>
      <b>Pérdida de masa muscular si se usa muy ajustado</b>
    </p>
  );

  return (
    <div
      className="m-0 vh-100 row justify-content-center align-items-center"
      style={{ backgroundColor: "#83C4D7", width, height }}
    >
      <div>
        <img src={tituloCon} width="100%" />
      </div>
      <div
        className="col-auto p-3 text-center"
        style={{
          backgroundColor: "#1F4C4F",
          width: "90%",
          height: "70%",
          borderRadius: "30px",
        }}
      >
        <div className="row">
          <div className="col-3">
            <div
              className="col-auto p-2 text-center"
              style={{
                backgroundColor: "#98B2BA",
                width: "100%",
                height:"100%",
                borderRadius: "10px",
                
              }}
            >
              <br />

              <div className="row">
                <img src={imgCon1} width="50%" />
              </div>
              
              <div
                className="row"
                style={{ color: "white", fontSize: 30, textAlign: "center", marginTop:20 }}
              >
                {texto1}
              </div>
            </div>
          </div>
          <div className="col-3">
            <div
              className="col-auto p-2 text-center"
              style={{
                backgroundColor: "#98B2BA",
                width: "100%",
                height:"100%",
                borderRadius: "10px",
                
              }}
            >
              <div >
                <img src={imgCon2} width="100%" />
              </div>
              <div
                style={{ color: "white", fontSize: 24, textAlign: "center" }}
              >
                {texto2}
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="row" style={{marginLeft:10}}>
              <div
                className="container-fluid row p-2 text-center"
                style={{
                  backgroundColor: "#98B2BA",
                  width: "100%",
                  height: "50%",
                  borderRadius: "10px"
                }}
              >
                <div className="col-6">
                  <img src={imgCon3} width="70%" />
                </div>

                <div
                  className="col-6"
                  style={{ color: "white", fontSize: 24, textAlign: "center" }}
                >
                  {texto3}
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div
                className="container-fluid row p-2 text-center"
                style={{
                  backgroundColor: "#98B2BA",
                  width: "97%",
                  height: "75%",
                  borderRadius: "10px",
                  marginLeft:10
                }}
              >
                <div className="col-6">
                  <img src={imgCon4} width="70%" />
                </div>
                <div
                  className="col-6"
                  style={{ color: "white", fontSize: 24, textAlign: "center" }}
                >
                  {texto4}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row pb-5">
        <div className="col-6">
          <div className="float-md-left">
            <button className="button" onClick={irAnterior} id="anterior">
              Anterior
            </button>
          </div>
        </div>

        <div className="col-6">
          <div className="float-md-right">
            <button className="button" onClick={irSiguiente} id="siguiente">
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
