import { useState } from 'react'
import spliffsStill from './assets/spliffs_still.jpg'
import header from './assets/name.png'
import store from './assets/store.png'
import links from './assets/links.png'
import tour from './assets/tour.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="site_header">
          <img src={header} alt="header" />
      </header>
      <div className="container_row">
        <div className="image_container">
          <img src={spliffsStill} alt="homePage" />
        </div>
        <div className="links_container">
          <div className="links_grid">
            <div className="store_link">
              <input type="image" src={store} alt="store button"/>
            </div>
            <div className="links_link">
              <input type="image" src={links} alt="links button"/>
            </div>
            <div className="tour_link">
              <input type="image" src={tour} alt="tour button"/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
