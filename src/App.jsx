import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Header from "./Helper Pages/Header.jsx";
import Home from "./Pages/Home.jsx";
import Footer from "./Helper Pages/Footer.jsx";
import About from "./Pages/About/About.jsx";
import Services from "./Pages/Services/Services.jsx";
import Contact from "./Pages/Contact/Contact.jsx"
function App() {
  return (
      <BrowserRouter>
          <main>
              <Header/>
              <div className=" flex justify-center items-center w-full mt-[60px] min-h-screen bg-gradient-to-b from-black to-violet-950">

                  <Routes>
                      <Route path="/" element={<Home/>} />
                      <Route path="/about" element={<About/>} />
                      <Route path="/services" element={<Services/>} />
                      <Route path="/contact" element={<Contact/>} />
                  </Routes>

              </div>
              <Footer/>
          </main>
      </BrowserRouter>
  )
}

export default App
