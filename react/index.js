import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Home} from "./pages/Home/Home";
import * as ReactDOM from "react-dom";
import '../assets/styles/app.scss';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);