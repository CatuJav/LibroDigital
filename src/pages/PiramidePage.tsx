import React from 'react'
import { useHistory } from 'react-router-dom';
import useWindowDimensions from '../hooks/useWindowDimensions';

import piramideImg from '../assets/piramideImg.png';


export const PiramidePage = () => {
    const history=useHistory();
    const { height, width } = useWindowDimensions();
    
    const irInicio=()=>{
        history.push('/')
      }
    return (
        <div style={{backgroundColor:'#2B9C2E', width,height}} >
            <div className="row">
              <div className="col-8" style={{backgroundColor:'blue'}}>
                <img src={piramideImg} width="100%" />
              </div>
              <div className="col-4" style={{backgroundColor:'red', height:10}}>
                <div></div>
              </div>
            </div>
            <button className="btn btn-info"
          style={{
            borderRadius: 8,
            //backgroundColor: "#c9dee6",
            //borderColor: "transparent",
            fontSize: 36,
          }}
          onClick={irInicio}
        >
          PRINCIPAL
        </button>
        </div>
    )
}
