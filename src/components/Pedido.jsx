import React from 'react'
import axios from "axios";

const eliminar = (title, nombre)=>{
    axios
        .post(`http://localhost:8082/borrarorden`, {
            title,nombre,
        })
        .then((res) => {
        });
}
const Pedido = (props) => {
    console.log(props)
    return (
        <div className="">
            <div className="d-flex justify-content-end"><i className="bi bi-arrow-return-right" onClick={()=>eliminar(props.data.title,props.data.nombre)}></i></div>
            <div className="card" style={{ width: "18rem" }} key={props.data.id}>
                <img src={props.data.src} className="card-img-top" alt="img" />
                <div className="card-body">
                    <h5 className="card-title">{props.data.title}</h5>
                    <p className="card-text">{props.data.text}</p>
                    <p className="card-text">{props.data.nombre}</p>
                    <p className="card-text">{props.data.direccion}</p>
                    <p className="card-text">{props.data.telefono}</p>

                </div>
            </div>
        </div>
    )
}

export default Pedido

