import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./core/Home";
import Menu from "./core/Menu";
import Sidebar from "./core/Sidebar";
import MainRouter from "./MainRouter";
import nurul from "./nurul.jpg";

function App() {
    return (
        <div>
            <div className="container">
                <div className="header">
                    <h1 className="title">Nurul Hidayat</h1>
                    <h3> My Personal website</h3>
                    <BrowserRouter>
                        <MainRouter />
                    </BrowserRouter>
                </div>

                <div className="content cf">
                    {/* <Home/> */}
                    <Sidebar nurul={nurul} />
                </div>

                <div className="footer">
                    <p className="copy">Copyright 2021</p>
                    <p className="copy">Design by Nurul Hidayat</p>
                </div>
            </div>
        </div>
    );
}

export default App;
