import React from "react";
import { useHistory } from "react-router-dom";
import imgUsoAdecuado from "../../assets/chumbi/usoAdecuadoChumbi.jpg";
import imgUsoAdecuado2 from "../../assets/chumbi/CH.png";
import useWindowDimensions from "../../hooks/useWindowDimensions";

export const PaginaUsoAdecuado = () => {
  const { width, height } = useWindowDimensions();
  const history = useHistory();

  const irAnterior = () => {
    history.push("/consecuenciasChumbi");
    //console.log('clic')
  };
  const irSiguiente = () => {
    history.push("/bibliografia");
    //console.log('clic')
  };

  return (
    <div className="fondo">
      <div className="container" style={{ marginTop: "1%" }}>
        <h1 style={{ color: "black" }}>USO ADECUADO</h1>
      </div>
      <div className="divcontenido" style={{}}>
        <div className="row">
          <div className="col" style={{padding:20,display:'flex' ,justifyContent:'center',alignItems:'center',backgroundColor:''}}>
            <p style={{color:'white',fontSize:25}}>
              •El chumbi es parte de la vestimenta y de la cultura, debe ser
              usado de forma adecuada ya que es parte de tu identidad.
              <br />
              •No se debe usar muy ajustado, ni por períodos muy largos de
              tiempo
            </p>
          </div>
          <div className="col" style={{ backgroundColor: "", display:'flex', flexDirection:'column'}}>
            
              <div className="col align-self-center">
                <img className="img-fluid" src={imgUsoAdecuado} style={{borderTopRightRadius:20}}/>
              </div>
              <div className="col align-self-center">
                <img className="img-fluid" src={imgUsoAdecuado2} style={{borderBottomRightRadius:20}}/>
              </div>
          
            {/*  */}
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
