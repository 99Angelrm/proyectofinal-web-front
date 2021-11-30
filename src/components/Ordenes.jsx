import React from "react";
import Pedido from "./Pedido";
import { useState, useEffect } from "react";
import axios from "axios";

const Ordenes = (props) => {
    const [data, setdata] = useState(props.data);
    axios.get(`http://localhost:8082/store/obtenerOrden`).then((res) => {
        const datos = res.data;
        setdata(datos);
    });
    const platillos = data.map((item, id) => (
        <div className=" mt-5">
            <Pedido data={item} />
        </div>
    ));
    return (
        <div className="d-flex flex-wrap justify-content-evenly">
            {platillos}
        </div>
    );
};

export default Ordenes;
