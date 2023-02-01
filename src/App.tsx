import { Route, Routes } from "react-router-dom";
import { ProductPage } from "./pages/productPage";
import { AboutPage } from "./pages/aboutPage";
import { Navigation } from "./components/navigation";

function App() {
    return (
        <>
            <Navigation></Navigation>
            <Routes>
                <Route path="/" element={ <ProductPage/> }/>
                <Route path="/about" element={ <AboutPage/> }/>
            </Routes>
        </>
    );
}

export default App;
