import './App.css'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Function from './Components/Function/Function'
import Navbar from './Components/Navbar/Navbar'
import type { CustomerCardTypes } from './type'

const TicketPromise = async():Promise<CustomerCardTypes[]> => {
  const res = await fetch('/data.json')
  const data = await res.json()
  return data
}

function App() {

  return (
    <div className='bg-[#f5f5f5]'>
      <Navbar />
      <Banner />
      <Function />
      <Footer />
    </div>
  )
}

export default App
