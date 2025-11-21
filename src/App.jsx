import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ValueCards from './components/ValueCards'
import Roles from './components/Roles'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F6] text-stone-900">
      <Navbar />
      <main>
        <Hero />
        <ValueCards />
        <Roles />
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default App
