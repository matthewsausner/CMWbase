
import React from 'react'
import spliffsStill from '../assets/spliffs_still.jpg'
import store from '../assets/store.png'
import links from '../assets/links.png'
import tour from '../assets/tour.png'
import Header from '../Components/Header.jsx'
import './home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {
	const navigate = useNavigate();
	const handleStoreNav = () => {
		navigate('/store')
	}
	const handleLinksNav = () => {
		navigate('/links')
	}
	const handleTourNav = () => {
		navigate('/tour')
	}
	return(
		<>
			<Header />
			<div className="container_row">
				<div className="image_container">
				  <img src={spliffsStill} alt="homePage" />
				</div>
				<div className="links_container">
				  <div className="links_grid">
				    <div className="store_link">
				      <input 
				      	type="image"
				      	onClick={handleStoreNav} 
				      	src={store} 
				      	alt="store button"/>
				    </div>
				    <div className="links_link">
				      <input 
				      	type="image" 
				      	onClick={handleLinksNav} 
				      	src={links} 
				      	alt="links button"/>
				    </div>
				    <div className="tour_link">
				      <input 
				      	type="image" 
				      	onClick={handleTourNav} 
				      	src={tour} 
				      	alt="tour button"/>
				    </div>
				  </div>
				</div>
			</div>
		</>
	)
}
export default Home