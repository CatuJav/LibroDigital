import React from "react";
import { useHistory } from "react-router-dom";
import ninio1 from "../assets/postura/ninio1.jpg";
import ninio2 from "../assets/postura/nino2espalda.jpg";
import ninio3 from "../assets/postura/nino3cuello.png";
import useWindowDimensions from "../hooks/useWindowDimensions";

export const Postura1Page = () => {
  const { width, height } = useWindowDimensions();
  const history = useHistory();

  const irAnterior = () => {
    history.push("/ejercicios4");
    //console.log('clic')
  };
  const irSiguiente = () => {
    history.push("/pupitre");
    //console.log('clic')
  };
  return (
    <div className="fondo">
      <div className="container" style={{ marginTop: "1%" }}>
        <h1 style={{ color: "black" }}>HACE DAÑO A MI CUERPO</h1>
      </div>
      <div className="divcontenido" style={{ padding: 50 }}>
        <div className="row" style={{}}>
          <div
            className="p-3 col-3"
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#56737C",
              borderRadius: 20,
              alignItems: "center",
            }}
          >
            <img src={ninio1} alt="" width="100%" />
            <div>
              <p
                style={{
                  fontSize: 25,
                  color: "white",
                  fontWeight: "bold",
                  fontFamily: "sans-serif",
                }}
              >
                Cargar bultos de mucho peso como la mochila de la escuela
              </p>
            </div>
          </div>
          <div
            className="p-3 col-8"
            style={{
              marginLeft: 50,
              backgroundColor: "#56737C",
              borderRadius: 20,
            }}
          >
            <div className="row g-2">
              <div
                className="col-12"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <p
                  className=""
                  style={{
                    fontSize: 25,
                    color: "white",
                    fontWeight: "bold",
                    fontFamily: "sans-serif",
                  }}
                >
                  Si la mochila es muy pesada me da dolor en: Cuello, Hombros
                </p>
              </div>
              <div
                className="col-6"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img src={ninio2} alt="" width="50%" />
                <p
                  style={{
                    fontSize: 25,
                    color: "white",
                    fontWeight: "bold",
                    fontFamily: "sans-serif",
                  }}
                >
                  Dolor de Hombros
                </p>
              </div>
              <div
                className="col-6"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img src={ninio3} alt="" width="100%" />
                <p
                  style={{
                    fontSize: 25,
                    color: "white",
                    fontWeight: "bold",
                    fontFamily: "sans-serif",
                  }}
                >
                  Dolor de Cuello
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div className="">
          <button className="button" onClick={irAnterior}>
            ANTERIOR{" "}
          </button>
        </div>
        <div className="">
          <button className="button" onClick={irSiguiente}>
            SIGUIENTE{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
