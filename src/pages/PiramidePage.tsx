import React from 'react'
import { useHistory } from 'react-router-dom';
import useWindowDimensions from '../hooks/useWindowDimensions';

export const PiramidePage = () => {
    const history=useHistory();
    const { height, width } = useWindowDimensions();
    
    const irInicio=()=>{
        history.push('/')
      }
    return (
        <div style={{backgroundColor:'darkgreen', height, width}}>
            <h1>Piramide Page</h1>

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
