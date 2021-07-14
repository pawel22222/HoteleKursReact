import { useState, useEffect } from 'react'
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


  const [hotels, setHotels] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = () => {
      setTimeout(() => {
        setHotels(hotelsJSON.sort((a, b) => (a.name > b.name ? 1 : -1)))
        setLoading(false)
      }, 1000)
    }
    getData()
  })

  // Filtrowanie hoteli przez SEARCHBARU
  const filterHotels = (inputName, inputCity) =>
    setHotels(hotels.filter(hotel =>
      hotel.name.toLowerCase().includes(inputName.toLowerCase()) &&
      hotel.city.toLowerCase().includes(inputCity.toLowerCase())
    ))


  // Pokazywanie tresci za pomoca MENU
  const [showContent, setShowContent] = useState('hotels')

  function showComponent(showContent) {
    switch (showContent) {
      case 'home': return <Home />
      case 'hotels':
        if (loading) return <div className={ `${styles.loadingDiv}` }>Ładowanie danych . . .</div>
        else return <Hotels hotels={ hotels } />


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

      <Header
        filterHotels={ filterHotels }
        showContent={ showContent } />
      <Menu changeComponent={ changeComponent } />


      { showComponent(showContent) }

      <Footer />


    </div>
  )

}

export default App;
