import SideNavbar from '../components/sidebar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  

  return (
    <>
    <SideNavbar />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
