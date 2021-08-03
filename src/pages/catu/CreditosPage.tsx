import React from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import utaImg from "../../assets/logos/uta.png";
import fiseiImg from "../../assets/logos/fisei.png";
import { useHistory } from "react-router-dom";

export const CreditosPage = () => {
  const { height, width } = useWindowDimensions();
  const history = useHistory();
  const irAnterior = () => {
    history.push("/bibliografia");
    //console.log('clic')
  };
  const irSiguiente = () => {
    history.push("/");
    //console.log('clic')
  };
  return (
    <div>
      <div className="" style={{ backgroundColor: "#7A1E19", height, width }}>
        <div className="container p-1">
        <p style={{fontSize:40, color:'white', textAlign:'center', fontWeight:'bold'}}>Universidad Técnica de Ambato</p>
        <p style={{fontSize:35, color:'white', textAlign:'center', fontWeight:'bold'}}>Facultad de Ingeniería en Sistemas, Electrónica e Industrial</p>
        <p style={{fontSize:30, color:'white', textAlign:'center', fontWeight:'bold'}}>Carrera de Ingeniería en Sistemas Computacionales e Informáticos</p>

          <div className="row align-items-center pt-5" style={{}}>
            <div className="col" style={{ }}>
              <img src={utaImg} alt="" width="70%" />
            </div>
            <div className="col" style={{ backgroundColor: "" }}>
              <h2 style={{fontWeight:'bold', fontSize:40, color:'#95a5a6'}}>Desarrollado por:</h2>
              <div style={{ fontSize: 25, color:'white', fontWeight:'bold' }}>
                <ul>
                  <li>Catucuago Silvio</li>
                  <li>Conterón Alexander</li>
                  <li>Jumbo Danilo</li>
                  <li>Mayorga Sebastián</li>
                  <li>Quishpe Javier</li>
                  <li>Rubira Génesi</li>
                </ul>
              </div>
            </div>
            <div className="col" style={{}}>
              <img src={fiseiImg} alt="" width="80%" />
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
            FIN{" "}
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};
