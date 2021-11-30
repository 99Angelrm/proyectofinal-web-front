import React from "react";
import { Link } from "react-router-dom";

const Cabecera = () => {
    return (
        <div className="d-flex justify-content-between">
            <Link to="/">
                <i className="bi bi-house-door-fill ms-2"></i>
            </Link>
            <Link to="/store">
            <i className="bi bi-person-circle me-2"></i>
            </Link>
        </div>
    );
};

export default Cabecera;
