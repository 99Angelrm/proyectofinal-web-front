import React from "react";
import axios from "axios";
import { useState } from "react";

const eliminar = (title, nombre) => {
    axios
        .post(`http://localhost:8082/borrarorden`, {
            title,
            nombre,
        })
        .then((res) => {
            window.location.href = "/store";
        });
};
const Pedido = (props) => {
    const changeOrden = (nombre, title) => {
        console.log("Aqui");
        axios
            .post(`http://localhost:8082/cambiarorden`, {
                nombre,
                title,
            })
            .then((res) => {
                window.location.href = "/store";
            });
    };
    const getPlatillos = () => {
        axios.get(`http://localhost:8082/obtenerplatillos`).then((res) => {
            const datos = res.data;
            setPlatillos(datos);
            console.log(platillos);
        });
    };
    const [datos, setdatos] = useState(props.data);
    const [Nueva,setNueva] = useState("");
    const [toggle, settoggle] = useState(false);
    const [platillos, setPlatillos] = useState(null);
    return (
        <div className="">
            <div className="d-flex justify-content-between">
                <i
                    className="bi bi-pencil-fill"
                    onClick={() => {
                        settoggle(!toggle);
                        getPlatillos();
                    }}
                ></i>
                <i
                    className="bi bi-arrow-return-right"
                    onClick={() => eliminar(datos.title, datos.nombre)}
                ></i>
            </div>
            <div className="card" style={{ width: "18rem" }} key={datos.id}>
                <img src={datos.src} className="card-img-top" alt="img" />
                <div className="card-body">
                    {toggle ? (
                        <span>
                            <select
                                class="form-select"
                                aria-label="Default select example"
                                onChange={(e) => {
                                    setNueva(e.target.value);
                                }}
                            >
                                <option selected>Platillos</option>
                                {platillos === null ? (
                                    <option></option>
                                ) : (
                                    platillos.map((item, id) => (
                                        <option value={item.title}>
                                            {item.title}
                                        </option>
                                    ))
                                )}
                            </select>
                            <button
                                className="btn btn-primary mt-2 mb-2"
                                onClick={() => {
                                    changeOrden(datos.nombre,Nueva);
                                }}
                            >
                                {" "}
                                Cambiar
                            </button>
                        </span>
                    ) : (
                        <div>
                            <h5 className="card-title">{datos.title}</h5>
                            <p className="card-text">{datos.text}</p>
                        </div>
                    )}

                    <div>
                        <p className="card-text">{datos.nombre}</p>
                        <p className="card-text">{datos.direccion}</p>
                        <p className="card-text">{datos.telefono}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pedido;
