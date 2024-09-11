import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './component/Navigation'
import Footer from './component/footer'
import Information from './component/Information'
import Form from './component/Form'

function App() {


  return (
    <><section>
         <Navigation/> 
    </section>
    <section>
      <Information/>
    </section>
    <section>
      <Form/>
    </section>
    <section>
    <Footer/>
    </section>
    
  
   
    </>
  )
}

export default App
