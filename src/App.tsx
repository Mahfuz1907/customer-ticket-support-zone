import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Function from './Components/Function/Function'
import Navbar from './Components/Navbar/Navbar'
import type { CustomerCardTypes } from './type'
import { ToastContainer } from 'react-toastify'

const TicketPromise = async():Promise<CustomerCardTypes[]> => {
  const res = await fetch('/data.json')
  const data = await res.json()
  return data
}

function App() {

  const [inProgress, setInProgress] = useState<CustomerCardTypes[]>([])

  return (
    <div className='bg-[#f5f5f5]'>
      <Navbar />
      <Banner inProgress={inProgress} />
      <Suspense fallback={<div>Loading.....</div>}>
        <Function TicketPromise={TicketPromise()} inProgress={inProgress} setInProgress={setInProgress}/>
      </Suspense>
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App
