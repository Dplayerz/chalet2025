import NavBar from "./navbar"
import imagePath from "./assets/GladiatorCoologo.png";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Upload from "./Upload";
import Func from "./UploadVrai"
import Course from "./charades";





function App() {
  
  
  let items = ["Home", "Upload", "Classement",];
  return (
    <BrowserRouter>
    
      <NavBar 
      brandName="PEPPER GAMES" //titre 
      imageSrcPath={imagePath} 
      navItems={items}/>
    
    <Routes>
    <Route path="/" element={<Upload/>}></Route>
      <Route path="/Upload" element={<Upload/>}></Route>
      <Route path="/UploadVrai" element={<Func/>}></Route>
      <Route path="/charades" element={<Course/>}></Route>
      
      
    </Routes>
    </BrowserRouter>
  );
}
export default App;