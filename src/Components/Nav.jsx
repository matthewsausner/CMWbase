import React, {useState} from 'react'

import store from '../assets/store.png'
import links from '../assets/links.png'
import tour from '../assets/tour.png'
import home from '../assets/home.png'
import mix from '../assets/mix.png'
import './Nav.css'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
	const [isVisible, setIsVisible] = useState(false);
	const navigate = useNavigate();
	const handleHomeNav = () => {
		navigate('/')
	}
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
			<nav className="h-[190vh] fixed top-[25px] right-[0px] flex flex-col justify-around items-center w-full z-10 duration-700">
	          <div className="home_link">
			      <input 
			      	type="image" 
			      	onClick={handleHomeNav} 
			      	src={home} 
			      	alt="home button"/>
			    </div>
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
	        </nav>

		</>
	)
}
export default Header