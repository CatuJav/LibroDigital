import React from "react";
import { useHistory } from "react-router-dom";
import useWindowDimensions from "../hooks/useWindowDimensions";
import piramideImg from "../assets/PiramideAlimentacion.png";
import video1 from "../assets/videosPiramide/grasaYazucar.mp4";
import video2 from "../assets/videosPiramide/2canesypescados.mp4";
import video3 from "../assets/videosPiramide/3lacteosfrutossecos.mp4";
import video4 from "../assets/videosPiramide/4verdurasfrutas.mp4";
import video5 from "../assets/videosPiramide/5cereales.mp4";
import { VideoPiramide } from "../components/VideoPiramide";
import '../themes/estilos.css';
import '../themes/estiloAlimentacionSana.css'
export const PiramidePage = () => {
  const history = useHistory();
  const { height, width } = useWindowDimensions();

  const irInicio = () => {
    history.push("/");
  };
  const irSiguiente = () => {
    history.push("/sana");
  };

  const descripcionCategorias = {
    desGrasa:
      " Estos alimentos proporcionan calorías, y muy pocas o ningunas vitaminas o minerales. La recomendación es usar muy poco los alimentos de este grupo.",
    desCarne: " La función principal de este grupo de alimentos dentro de nuestro organismo es la función de mantener de tejidos como los músculos o la piel, y también son imprescindibles para el correcto funcionamiento de las conexiones nerviosas y la respuesta inmunitaria. ",
    desLacteos: "Los lácteos aportan varias vitaminas que ayudan a mantener los niveles de energía. Los frutos secos son una fuente importante de proteína vegetal y ácidos grasos monoinsaturados, que son fundamentales para mantener el cuerpo en buenas condiciones con el paso del tiempo.",
    desFrutas: "De las frutas y verduras provienen de sus vitaminas, minerales y antioxidantes que ayudan a fortalecer su sistema inmunológico, especialmente cuando se combinan con ejercicio regular.",
    desHidratos: "La función principal que cumplen los carbohidratos es la aportación de la energía necesaria para llevar a cabo nuestro día a día.Aquí se encuentran las pastas, el maíz los cereales, el arroz, el pan etc.",
  };

  return (
    <div style={{ backgroundColor: "#2B9C2E", width,}}>
      <div className="row">
        <div
          className="col-7"
          style={{ height: height - 120}}
        >
          <img
            src={piramideImg}
            style={{ position: "absolute", height: height - 130,marginLeft:90}}
          />
        </div>
        <div className="col-5" >
          <div
            style={{ display:'flex', flexDirection:'column',justifyContent:'space-evenly',height:height-130, marginLeft:50}}
          >
            <div>
              <button
                type="button"
                className="buttonC"
                data-bs-toggle="modal"
                data-bs-target="#azucarModal"
                style={{
                  backgroundColor: "#F7774C",
                  fontSize: 25,
                  width: 300,
                  zIndex:1,
                }}
              >
                DULCES Y GRASAS
              </button>
              <VideoPiramide
                idModal="azucarModal"
                color="#F7774C"
                descripcion={descripcionCategorias.desGrasa}
                titulo="DULCES Y GRASAS"
                videoUri={video1}
              />
            </div>
            <div >
              <button
                type="button"
                className="buttonC"
                data-bs-toggle="modal"
                data-bs-target="#carnemodal"
                style={{
                  backgroundColor: "#EDA34A",
                  fontSize: 25,
                  width: 300,
                }}
              >
                CARNE, HUEVOS Y PESCADO
              </button>
              <VideoPiramide
                idModal="carnemodal"
                color="#EDA34A"
                descripcion={descripcionCategorias.desCarne}
                titulo="CARNE, HUEVOS Y PESCADO"
                videoUri={video2}
              />
            </div>
            <div >
              <button
                type="button"
                className="buttonC"
                data-bs-toggle="modal"
                data-bs-target="#lacteosModal"
                style={{
                  backgroundColor: "#D8D847",
                  fontSize: 25,
                  width: 300,
                }}
              >
                LÁCTEOS Y FRUTOS SECOS
              </button>
              <VideoPiramide
                idModal="lacteosModal"
                color="#D8D847"
                descripcion={descripcionCategorias.desLacteos}
                titulo="LÁCTEOS Y FRUTOS SECOS"
                videoUri={video3}
              />
            </div>
            <div >
              <button
                type="button"
                className="buttonC"
                data-bs-toggle="modal"
                data-bs-target="#verdurasmodal"
                style={{
                  backgroundColor: "#B5DC41",
                  fontSize: 25,
                  width: 300,
                }}
              >
                FRUTAS Y VERDURAS
              </button>
              <VideoPiramide
                idModal="verdurasmodal"
                color="#B5DC41"
                descripcion={descripcionCategorias.desFrutas}
                titulo="FRUTAS Y VERDURAS"
                videoUri={video4}
              />
            </div>
            <div >
              <button
                type="button"
                className="buttonC"
                data-bs-toggle="modal"
                data-bs-target="#hidratosmodal"
                style={{
                  backgroundColor: "#E1C175",
                  fontSize: 25,
                  width: 300,
                }}
              >
                HIDRATOS DE CARBONO
              </button>
              <VideoPiramide
                idModal="hidratosmodal"
                color="#E1C175"
                descripcion={descripcionCategorias.desHidratos}
                titulo="HIDRATOS DE CARBONO"
                videoUri={video5}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{paddingBottom:20}}>
        <div className="row" >
          <div className="col align-self-start">
            <button
              className="button"
              style={{
                marginTop:0
                //borderRadius: 8,
                //backgroundColor: "#c9dee6",
                //borderColor: "transparent",
                //fontSize: 30,
              }}
              onClick={irInicio}
            >
              Anterior
            </button>
          </div>
          <div className="col align-self-end">
            <button
              className="button"
              style={{
                marginTop:0
                //borderRadius: 8,
                //backgroundColor: "#c9dee6",
                //borderColor: "transparent",
                //fontSize: 30,
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
