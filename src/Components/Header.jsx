import React, {useState} from 'react'

import header from '../assets/name.png'
import store from '../assets/store.png'
import links from '../assets/links.png'
import tour from '../assets/tour.png'
import home from '../assets/home.png'
import mix from '../assets/mix.png'
import './Header.css'
import { useNavigate } from 'react-router-dom'

const Header = () => {
	const [isVisible, setIsVisible] = useState(false);
	const navigate = useNavigate();
	const handleHomeNav = () => {
		navigate('/')
	}
	return(
		<>	
			<div className="header_container">
				<header className="site_header">
					<input 
						type="image"
						onClick={handleHomeNav}
						src={header} 
						alt="header" 
					/>
				</header>
			</div>
		</>
	)
}
export default Header