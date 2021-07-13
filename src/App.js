import { useState } from 'react'
import styles from './App.module.scss'

import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Home from './components/Home/Home'
import Hotels from './components/Hotels/Hotels'
import AboutUs from './components/AboutUs/aboutUs'
import Contakt from './components/Contakt/Contakt'
import Footer from './components/Footer/Footer'

import hotelsJSON from './hotels.json'

function App() {



  const hotels = hotelsJSON.sort((a, b) => (a.name > b.name ? 1 : -1))

  const [hotelsFilter, setHotelsFilter] = useState(hotels)

  // Filtrowanie hoteli przez SEARCHBARU
  const filterHotels = (inputName, inputCity) =>
    setHotelsFilter(hotels.filter(hotel =>
      hotel.name.toLowerCase().includes(inputName.toLowerCase()) &&
      hotel.city.toLowerCase().includes(inputCity.toLowerCase())
    ))


  // Pokazywanie tresci za pomoca MENU
  const [showContent, setShowContent] = useState('hotels')

  function showComponent(showContent) {
    switch (showContent) {
      case 'home': return <Home />
      case 'hotels': return <Hotels hotels={ hotelsFilter } />
      case 'aboutUs': return <AboutUs />
      case 'contact': return <Contakt />

      default: return null
    }
  }

  const changeComponent = (e) => setShowContent(e.target.getAttribute("data-name"))



  return (
    <div
      data-mode="dark"
      className={ `appDiv ${styles.appDiv}` }>
      <Header filterHotels={ filterHotels } />
      <Menu changeComponent={ changeComponent } />

      { showComponent(showContent) }

      <Footer />

    </div>
  );

}

export default App;
