import React from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { useHistory } from "react-router-dom";
import movercargas from "../assets/movercarga.png";
import empujarcargas from "../assets/empujarcarga.png";
import levantarcargas from "../assets/levantarcarga.png";
import transportarcargas from "../assets/transportarcarga.png";
import "../themes/estilos.css";

export const ManipularCargas = () => {
  const { height, width } = useWindowDimensions();
  const history = useHistory();
  const irSiguiente = () => {
    history.push("/usoadecuado");
  };
  const irAtras = () => {
    history.push("/manipularCargaD");
  };
  return (
    <div
      className="m-0 vh-100 row justify-content-center align-items-center"
      style={{ backgroundColor: "#83C4D7", width, height }}
    >
      <div
        className="col-auto p-5 text-center"
        style={{
          backgroundColor: "#2A728B",
          width: "65%",
          borderRadius: "30px",
          borderStyle: "solid",
          borderColor: "white",
          borderWidth: "2px",
        }}
      >
        <div className="row justify-content-center align-items-center">
          <div>
            <h1 style={{ color: "white" }}>
              <b>¿QUÉ ES MANIPULAR CARGAS?</b>
            </h1>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-5">
            <div
              className="container"
              style={{
                backgroundColor: "#FFFFFF",
                borderStyle: "solid",
                borderColor: "#03384B",
                borderWidth: "7px",
              }}
            >
              <h5>Mover pesos o transportarlos</h5>
              <img src={movercargas} width="68%" />
            </div>
          </div>
          <div className="col-sm-5">
            <div
              className="container"
              style={{
                backgroundColor: "#FFFFFF",
                borderStyle: "solid",
                borderColor: "#03384B",
                borderWidth: "7px",
              }}
            >
              <h4>Empujar cargas</h4>
              <img src={empujarcargas} width="88.3%" />
            </div>
          </div>
          <div className="col-sm-1"></div>
        </div>
        <div className="row">
          <div className="col-sm-1">
            <button
              className="button"
              style={{
                //borderRadius: 5,
                //backgroundColor: "#c9dee6",
                //borderColor: "transparent",
                fontSize: 15,
                marginLeft:-40,
                marginTop:-20,
              }}
              onClick={irAtras}
            >
              Atras
            </button>
          </div>
          <div className="col-sm-5">
            <div
              className="container"
              style={{
                backgroundColor: "#FFFFFF",
                borderStyle: "solid",
                borderColor: "#03384B",
                borderWidth: "7px",
              }}
            >
              <h4>Levantar cargas</h4>
              <img src={levantarcargas} width="55.2%" />
            </div>
          </div>

          <div className="col-sm-5">
            <div
              className="container"
              style={{
                backgroundColor: "#FFFFFF",
                borderStyle: "solid",
                borderColor: "#03384B",
                borderWidth: "7px",
              }}
            >
              <h4>Transportar cargas</h4>
              <img src={transportarcargas} width="71%" />
            </div>
          </div>
          <div className="col-sm-1">
            <button
              className="button"
              style={{
                //borderRadius: 5,
                //backgroundColor: "#c9dee6",
                //borderColor: "transparent",
                paddingLeft:5,
                paddingRight:5,
                marginLeft:-20,
                marginTop:-20,
                fontSize: 15,
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
