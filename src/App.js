import "./App.css";
import Area from "./components/Area";
import Cabecera from "./components/Cabecera";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Order from "./components/Order";
import Ordenes from "./components/Ordenes"
import axios from "axios";
import { useState, useEffect } from "react";

// import Platillo from "./components/Platillo";
function App() {
    const [data, setdata] = useState(null);
    const [ordenes,setordenes]=useState(null);
    useEffect(() => {
        axios.get(`http://localhost:8082/obtenerplatillos`)
    .then(res => {
        const datos = res.data;
        setdata(datos);
      })
      axios.get(`http://localhost:8082/store/obtenerOrden`)
    .then(res => {
        const datos = res.data;
        setordenes(datos);
      })
    }, []);
    return data === null ? null : (
        <div className="App">
            <Router>
                <Cabecera />
                <Routes>
                    <Route
                        path="/order/:plato"
                        element={<Order data={data} />}
                    ></Route>
                    <Route path="/" element={<Area data={data} />}></Route>
                    <Route path="/store" element={<Ordenes data={ordenes}/>}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
