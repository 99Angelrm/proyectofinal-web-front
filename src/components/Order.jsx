import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

const subir = (comida) => {
    axios
        .post(`http://localhost:8082/ordenar`, {
            src: comida.src,
            title: comida.title,
            text: comida.text,
            ingredientes: comida.ingredientes,
            nombre: comida.nombre,
            direccion: comida.direccion,
            telefono: comida.telefono,
        })
        .then((res) => {});
};
const Order = (props) => {
    const [comida, setcomida] = useState(null);
    useEffect(() => {
        setcomida(data[plato]);
    }, []);
    const { data } = props;
    const { plato } = useParams();
    return (
        <div>
            <h1>Platillo {parseInt(plato) + 1}</h1>
            {comida === null ? null : (
                <div>
                    <img src={comida.src} alt="hola" height="200px" />
                    <h5 className="card-title">{comida.title}</h5>
                    <p className="card-text">{comida.text}.</p>

                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-6">
                            <div>
                                <h4>Ingredientes</h4>
                            </div>
                            <div className="d-flex justify-content-lg-between">
                                {comida.ingredientes.map((item) => (
                                    <p>{item}</p>
                                ))}
                            </div>
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    subir(comida);
                                    window.location.href = "/";
                                }}
                            >
                                <div className="mb-3">
                                    <label for="Nombre" className="form-label">
                                        Nombre
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="Nombre"
                                        aria-describedby="nombreHelp"
                                        onChange={(e) => {
                                            setcomida({
                                                ...comida,
                                                nombre: e.target.value,
                                            });
                                            console.log(comida);
                                        }}
                                    />
                                    <div id="nombreHelp" className="form-text">
                                        Persona que recibirá
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label
                                        for="Direccion"
                                        className="form-label"
                                    >
                                        Dirección
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="Direccion"
                                        onChange={(e) =>
                                            setcomida({
                                                ...comida,
                                                direccion: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        for="telefono"
                                        name="telefono"
                                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                        className="form-label"
                                    >
                                        Teléfono
                                    </label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="telefono"
                                        onChange={(e) =>
                                            setcomida({
                                                ...comida,
                                                telefono: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Ordenar Ahora
                                </button>
                            </form>
                        </div>
                        <div className="col-3"></div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Order;
