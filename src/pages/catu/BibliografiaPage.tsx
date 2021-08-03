import React from "react";
import { useHistory } from "react-router-dom";
import useWindowDimensions from "../../hooks/useWindowDimensions";

export const BibliografiaPage = () => {
  const { height, width } = useWindowDimensions();
  const history = useHistory();
  const irAnterior = () => {
    history.push("/usoadecuado");
    //console.log('clic')
  };
  const irSiguiente = () => {
    history.push("/creditos");
    //console.log('clic')
  };

  const texto1 =
    "Proyecto de vinculación: PROYECTO ACADÉMICO DE PRÁCTICAS PRE-PROFESIONALES DE SERVICIO A LA COMUNIDAD DE VINCULACIÓN CON LA SOCIEDAD N°.- 1.5:";
  const texto2 =
    "“Diagnóstico, intervención y evaluación fisioterapéutica en la agrupación Unión de Comunidades Indígenas de Tungurahua de la parroquia Santa Rosadel cantón Ambato";
  const texto3 =
    "EL CHUMBI ANDINO. REFLEXIONES EN TORNO A LA POTENCIALIDAD DE SU ESTUDIO DESDE LAS FUNCIONES DEL VESTIDO THE ANDEAN CHUMBI. REFLECTIONS ON THE POTENTIAL OF ITS STUDY FROM THE DRESSING-FUNCTIONS PERSPECTIVE Dra. Aylen Karina Medina Robalino";

  return (
    <div>
      <div style={{ padding: 30, backgroundColor: "#83C4D7", width, height }}>
        <div
          className="container"
          style={{
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              fontWeight: "bold",
              fontSize: 40,
              alignContent: "center",
              textAlign: "center",
            }}
          >
            BIBLIOGRAFÍA
          </p>
          <p
            style={{
              fontSize: 25,
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            {texto1}
          </p>
          <p style={{ fontSize: 25, textAlign: "center" }}> {texto2}</p>
          <p style={{ fontSize: 25, textAlign: "center" }}>{texto3}</p>
        </div>
        <div
          className="container pt-5"
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
    </div>
  );
};
