import Contact from '../components/Contact'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import Gallery from '../components/Gallery'
import '../styles/globals.css'
//import 'bootstrap/dist/css/bootstrap.css'
import Tarif from '../components/Tarif'


function MyApp({ Component, pageProps }) {
  return(
  <>
  <Navbar/>
  <Main/>
  <Gallery/>
  <Tarif/>
  <Contact/>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
