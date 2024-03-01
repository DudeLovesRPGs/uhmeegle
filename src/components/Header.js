import React from 'react'
import {useNavigate} from 'react-router-dom';
import {ReactSocialMediaIcons} from 'react-social-media-icons';



const Header = () => {
    const navigate = useNavigate()

    return(<header className='Header'>
    <p onClick={() =>{navigate('/')}}>Uhmeegle</p>
    {/* <button id='FBShareButton'>Share</button>
    <button id='TwitterShareButton'>Tweet</button> */}
    <ReactSocialMediaIcons icon = "github" url = "https://www.github.com/DudeLovesRPGs"  borderColor = "rgba(255, 255, 255, 0)" size = "22"/>
    <ReactSocialMediaIcons icon = "linkedin" url = "https://www.linkedin.com/in/richard-sinclair-dlrpgs" borderColor = "rgba(255,255,255,0)" size = "22"/>
    
</header>)
}

export default Header