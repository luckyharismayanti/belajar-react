
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Pricing from "./Pages/Pricing";
import Services from "./Pages/Services";
import Login from "./Pages/Login";
import Hook from "./Pages/Hook";



function App() {
  return (
  
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" exact element={<Home />}></Route>
      <Route path="/Services" element={<Services />}></Route>
      <Route path="/Pricing" element={<Pricing />}></Route>
      <Route path="/Contact" element={<Contact />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/Hook" element={<Hook React />}></Route>
    </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
