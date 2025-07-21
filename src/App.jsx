import Navbar from "./Components/Navbar"
import About from "./Components/About"
import Hero from "./Components/Hero"
import Services from "./Components/Services"
import Testimonalsection from "./Components/Testimonies/testimonalsection.jsx"
import Solution from "./Components/Solutions.jsx/Solution.jsx"
import Support from "./Components/Support/Support.jsx"
import Footer from "./Components/Footer/Footer.jsx"



function App() {
   return (
    <div className="min-h-screen">
      <Navbar/>
      <About />
      <Hero />
      <Services />  
      <Testimonalsection />
      <Solution  />
      < Support />
      <Footer />
   </div>
  )
}

export default App      
