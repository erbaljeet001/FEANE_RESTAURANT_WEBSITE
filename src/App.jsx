import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import AboutSection from "./components/AboutSection";
import BookTable from "./components/BookTable";
import FoodSection from "./components/FoodSection";
import Offer from './components/Offer'



function App() {
  return (<>

    <BrowserRouter>
      <Navbar />
      <Offer />
      <FoodSection/>
      <AboutSection />
      <BookTable/>
 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foodsection" element={<FoodSection />} />
        <Route path="/aboutsection" element={<AboutSection />} />
        <Route path="/booktable" element={<BookTable/>}/>
      </Routes>
    </BrowserRouter>
 </> );
}

export default App;