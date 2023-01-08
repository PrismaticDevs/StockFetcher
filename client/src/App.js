import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Stocks from "./pages/Stocks";

const App = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
