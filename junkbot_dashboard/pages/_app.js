import SideNavbar from '../components/sidebar'
import '../styles/globals.css'

import { useState } from 'react'

function MyApp({ Component, pageProps }) {

  return (
    <>
    
      <SideNavbar />
      <Component {...pageProps} />

    </>
    
  )
}
export default MyApp