import { Route, Routes } from "react-router-dom";
import { ProductPage } from "./pages/productPage";
import { AboutPage } from "./pages/aboutPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={ <ProductPage/> }/>
            <Route path="/about" element={ <AboutPage/> }/>
        </Routes>
    );
}

export default App;
