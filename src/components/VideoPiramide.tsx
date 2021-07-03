import React from "react";

interface Props {
  idModal: string;
  titulo: string;
  descripcion: string;
  color: string;
  videoUri: string;
}

export const VideoPiramide = (props: Props) => {
  return (
    <div>
      <div
        className="modal fade"
        id={props.idModal}
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content" style={{backgroundColor:props.color}}>
            <div className="modal-header">
              <h1 className="modal-title" id="exampleModalLabel" style={{textAlign:'center',width:'100%'}}>
                {props.titulo}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container">
              <div className="row" style={{backgroundColor:'white', borderRadius:50 }}>
                <div className="col-7 align-self-start" style={{marginLeft:-12}}>
                  <video
                    style={{ borderRadius: 50, }}
                    width="100%"
                    //height="360"
                    controls
                    onPointerEnter={(e) => {
                      e.currentTarget.play();
                      console.log(e.currentTarget.ended);
                    }}
                    onPointerOut={(e) => {
                      e.currentTarget.pause();
                    }}
                  >
                    <source src={props.videoUri} type="video/mp4"></source>
                  </video>
                </div>
                <div className="col-5" style={{marginLeft:0, backgroundColor:'transparent'}}>
                  <div style={{
                    display:'flex',
                    height:"100%",
                    borderRadius: 50,
                    alignItems:'center'
                  }}>
                  <p
                    style={{textAlign:'center', fontSize:22}}
                  >
                    {props.descripcion}
                  </p>
                  </div>
                </div>
              </div>
            
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
