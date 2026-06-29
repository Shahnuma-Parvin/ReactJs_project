
import React from 'react'
import Nevigation from './components/Nevigation/Nevigation'
import ContactHeader from './components/ContactHeader/ContactHeader'
import ContactForm from './components/ContactForm/ContactForm'

const App = () => {
  return (
    <div>
      <Nevigation />
     <main className='main_section'>
      < ContactHeader />
      <ContactForm />
     </main>
    </div>
  )
}

export default App
