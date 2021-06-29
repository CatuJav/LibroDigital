import React from "react";
import { useHistory } from "react-router-dom";
import useWindowDimensions from "../hooks/useWindowDimensions";

import piramideImg from "../assets/piramideImg.png";

export const PiramidePage = () => {
  const history = useHistory();
  const { height, width } = useWindowDimensions();

  const irInicio = () => {
    history.push("/");
  };
  return (
    <div style={{ backgroundColor: "#2B9C2E", width, height }}>
      <div className="row">
        <div className="col-9">
          <img src={piramideImg} width="100%" />
        </div>
        <div className="col-3">
          <button
            className="btn btn-info"
            style={{
              borderRadius: 8,
              //backgroundColor: "#c9dee6",
              //borderColor: "transparent",
              fontSize: 30,
            }}
            onClick={irInicio}
          >
            PRINCIPAL
          </button>
          <button style={{}}>DULCES Y GRASAS</button>
          <div style={{ backgroundColor: "blue", width: 50, height: 50 }}></div>
          <div
            style={{ backgroundColor: "black", width: 50, height: 50 }}
          ></div>
          <div
            style={{ backgroundColor: "white", width: 50, height: 50 }}
          ></div>
        </div>
      </div>
    </div>
  );
};
