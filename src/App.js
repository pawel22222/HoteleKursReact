import { useState } from 'react'
import styles from './App.module.scss'

import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Hotels from './components/Hotels/Hotels'
import Footer from './components/Footer/Footer'

import hotelsJSON from './hotels.json'

function App() {

  const hotels = hotelsJSON.sort((a, b) => (a.name > b.name ? 1 : -1))

  const [hotelsFilter, setHotelsFilter] = useState(hotels)

  const filterHotels = (inputName, inputCity) =>
    setHotelsFilter(hotels.filter(hotel =>
      hotel.name.toLowerCase().includes(inputName.toLowerCase()) &&
      hotel.city.toLowerCase().includes(inputCity.toLowerCase())
    ))



  return (
    <div
      data-mode="light"
      className={ `appDiv ${styles.appDiv}` }>
      <Header filterHotels={ filterHotels } />
      <Menu />
      <Hotels hotels={ hotelsFilter } />
      <Footer />
    </div>
  );

}

export default App;
