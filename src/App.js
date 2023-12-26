import Navbar from "./Components/Navbar/Navbar";
import './App.css';
import All from "./Components/All";
import Services from "./Components/Services/Services";
import { themeContext } from "./Context";
import { useContext } from "react";
import Footer from "./Components/Footer/Footer";
import Competences from "./Components/Competences/Competences";
import Contact from "./Components/Contact/Contact";
import Experiences from "./Components/Experiences/Experiences";
import Portfolio from "./Components/Portfolio/Portfolio";
import Error from "./Components/Error/Error";
import { Route, Routes } from "react-router-dom";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
      <div className="App"
        style={{background : darkMode? '#252526' : '', 
                color : darkMode? 'white' : ''
        }}
      >
        <Navbar/>
        <Routes>
          <Route path="/" element={<All/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/competences" element={<Competences/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/experience" element={<Experiences/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
        <Footer/>
      </div>
  );
}
export default App;
