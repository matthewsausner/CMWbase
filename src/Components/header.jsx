import React from 'react'

import header from '../assets/name.png'
import './Header.css'
import { useNavigate } from 'react-router-dom'

const Header = () => {
	const navigate = useNavigate();
	const handleHomeNav = () => {
		navigate('/')
	}
	return(
		<>
			<header className="site_header">
				<input 
					type="image"
					onClick={handleHomeNav}
					src={header} 
					alt="header" 
				/>
			</header>
		</>
	)
}
export default Header