import Navbar from "./Components/Navbar"
import About from "./Components/About"
import Hero from "./Components/Hero"
import Services from "./Components/Services"
import Testimonalsection from "./Components/testimonalsection"


function App() {
   return (
    <div className="min-h-screen">
      <Navbar/>
      <About />
      <Hero />
      <Services />  
      <Testimonalsection />
   </div>
  )
}

export default App      
