import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './component/Navigation'
import Footer from './component/footer'
import Information from './component/Information'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><section>
         <Navigation/> 
    </section>
    <section>
      <Information/>
    </section>
    <section></section>
    <section>
    <Footer/>
    </section>
    
  
   
    </>
  )
}

export default App
