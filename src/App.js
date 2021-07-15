import { useState, useEffect } from 'react'
import styles from './App.module.scss'

import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Home from './components/Home/Home'
import Hotels from './components/Hotels/Hotels'
import AboutUs from './components/AboutUs/aboutUs'
import Contakt from './components/Contakt/Contakt'
import Footer from './components/Footer/Footer'

import Loading from './components/UI/Loading/Loading'
import Searchbar from './components/UI/Searchbar/Searchbar'

// import hotelsJSON from './hotels.json'

function App() {


  const [hotels, setHotels] = useState([])
  const [loading, setLoading] = useState(true)

  // Pobieranie hoteli z mocky
  useEffect(() => {
    const fetchHotels = async () => {
      const hotels = await fetch('https://run.mocky.io/v3/26c76a68-c162-4fcd-bcdd-5b400816601d')
        .then(res => res.json())
      setHotels(hotels.sort((a, b) => (a.name > b.name ? 1 : -1)))
      setLoading(false)
      console.log('pobranie danych');
    }

    fetchHotels()
  }, [])


  // Filtrowanie hoteli przez SEARCHBAR
  const filterHotels = (inputName, inputCity) => {

    const fetchHotels = async () => {
      const hotels = await fetch('https://run.mocky.io/v3/26c76a68-c162-4fcd-bcdd-5b400816601d')
        .then(res => res.json())
      setHotels(hotels.filter(hotel =>
        hotel.name.toLowerCase().includes(inputName.toLowerCase()) &&
        hotel.city.toLowerCase().includes(inputCity.toLowerCase()))
        .sort((a, b) => (a.name > b.name ? 1 : -1)))
      setLoading(false)
      console.log('pobranie danych');
    }
    fetchHotels()
  }


  // Pokazywanie tresci za pomoca MENU
  const [showContent, setShowContent] = useState('hotels')

  function showComponent(showContent) {
    switch (showContent) {
      case 'home': return <Home />
      case 'hotels':
        if (loading || hotels === []) return <Loading />
        else return <Hotels hotels={ hotels } />;

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
        showContent={ showContent } >
        { (showContent === 'hotels' && <Searchbar filterHotels={ filterHotels } />) }
      </Header>
      <Menu changeComponent={ changeComponent } />

      <div className={ `${styles.mainContentDiv}` }>
        <h1 className={ `${styles.headerHotels} ` }>Hotele</h1>
        { showComponent(showContent) }
      </div>

      <Footer />


    </div>
  )

}

export default App;
