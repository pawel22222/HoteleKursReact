import { useState, useEffect } from 'react'
import styles from './App.module.scss'
//Components
import Layout from './components/Layout/Layout'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Home from './components/Home/Home'
import Hotels from './components/Hotels/Hotels'
import Hotel from './components/Hotels/Hotel/Hotel'
import AboutUs from './components/AboutUs/aboutUs'
import Contakt from './components/Contakt/Contakt'
import Footer from './components/Footer/Footer'
//Components UI
import Info from './components/UI/Info/Info'
import Loading from './components/UI/Loading/Loading'
import Searchbar from './components/UI/Searchbar/Searchbar'
//Context
// import AuthContext from './Context/authContext'


// import hotelsJSON from './hotels.json'

function App() {


  const [hotels, setHotels] = useState([])

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


  // Przełączanie zakładek za pomoca MENU
  const [showMainContent, setShowMainContent] = useState('hotels')
  const [loading, setLoading] = useState(true)

  function showMainComponent(showContent) {
    switch (showContent) {
      case 'home': return <Home />
      case 'hotels':
        if (loading) return <Loading />
        else if (hotels.length === 0) return <Info textInfo="Brak hoteli do wyświetlenia" />
        else
          return (
            <Hotels hotels={ hotels }>
              { hotels.map((hotel) => <Hotel key={ hotel.id } { ...hotel } />) }
            </Hotels>)

      case 'aboutUs': return <AboutUs />
      case 'contact': return <Contakt />

      default: return null
    }
  }

  const changeComponent = (e) => setShowMainContent(e.target.getAttribute("data-name"))

  return (
    <div
      data-mode="dark"
      className={ `appDiv ${styles.appDiv}` }>
      <Layout
        header={
          <Header
            filterHotels={ filterHotels }>
            { (showMainContent === 'hotels' && <Searchbar filterHotels={ filterHotels } />) }
          </Header> }

        menu={ <Menu changeComponent={ changeComponent } /> }

        main={
          <main className={ `${styles.mainDiv}` }>
            { showMainComponent(showMainContent) }
          </main> }

        footer={ <Footer /> }
      />
    </div>
  )
}

export default App;
