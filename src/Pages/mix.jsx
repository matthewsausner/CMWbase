import React from 'react'
import Header from '../Components/Header.jsx'
import './links.css'
import gmail from '../assets/gmail.png'
import disc from '../assets/disc.png'

const Links = () => {
	return(
		<>
			<Header />
			<div>
				<h2 > {"HMU <3"} </h2>
				<br/>
				<a href="mailto:clrsmthn.mix@gmail.com">
					<img className="link gmail" src={gmail} alt="gmail" />
				</a>
				<a href="https://discord.com/users/248621536930562050">
					<img className="link disc" src={disc} alt="disc" />
				</a>
			</div>
		</>
	)
}
export default Links