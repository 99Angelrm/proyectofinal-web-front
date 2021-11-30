import React from "react";
import Platillo from "./Platillo";

const Area = (props) => {
    const { data } = props;
    const platillos = data.map((item,id) => (
        <div className=" mt-5">
            <Platillo
                src={item.src}
                title={item.title}
                text={item.text}
                id={id}
            />
        </div>
    ));
    return (
        <div className="d-flex flex-wrap justify-content-evenly">
            {platillos}
        </div>
    );
};

export default Area;
