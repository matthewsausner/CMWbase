import React from 'react'
import Header from '../Components/Header.jsx'
import './links.css'
import bc from '../assets/bc.png'
import ig from '../assets/ig.png'
import tidal from '../assets/tidal.png'
import spotify from '../assets/spotify.png'
import yt from '../assets/yt.png'
import apple from '../assets/apple.png'

const Links = () => {
	return(
		<>
			<Header />
			<div class="image-grid">
				<a href="https://www.instagram.com/clrsmthn/">
					<img className="link ig" src={ig} alt="ig" />
				</a>
				<a href="https://clairesomething.bandcamp.com/">
					<img className="link bc" src={bc} alt="bandcamp" />
				</a>
				<br/>
				<img className="link tidal" src={tidal} alt="tidal" />
				<a href="https://open.spotify.com/artist/5jTmDxDsCR5NBzi2YEVIB6?si=Eld-CPvTRVuYjG_Z_gx-Ng">
					<img className="link spotify" src={spotify} alt="spotify" />
				</a>
				<br/>
				<a href="https://www.youtube.com/@clrsmthn">
					<img className="link yt" src={yt} alt="yt" />
				</a>
				<img className="link apple" src={apple} alt="apple" />
			</div>
		</>
	)
}
export default Links