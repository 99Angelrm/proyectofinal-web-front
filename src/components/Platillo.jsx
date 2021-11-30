import React from "react";
import { Link } from "react-router-dom";
const Platillo = (props) => {
    return (
        <div className="">
            <div className="d-flex justify-content-between">
                <i className="bi bi-pencil-fill"></i>
                <i className="bi bi-arrow-return-right" onClick={null}></i>
            </div>
            <div className="card" style={{ width: "18rem" }} key={props.id}>
                <img src={props.src} className="card-img-top" alt="img" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}.</p>
                    <Link to={"/order/" + props.id} className="btn btn-primary">
                        Pedir
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Platillo;
