import React from 'react'

export default function Card(props) {
    return (
        <div>
            <div className="col lg-4">
                <div className="card bg-fondo" style={{ width: "18rem" }}>
                    <img src="/" alt="" />
                    <div className="card-body">
                        <h5>
                            {props.data.tittle}
                        </h5>
                        <p>
                            {props.data.descripcion}
                        </p>
                        <a href="/"><button className="btn btn-light">Ver mas</button></a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
