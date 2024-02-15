import React from 'react'
import {FacebookShareButton, TwitterShareButton} from 'react-share'

const Home = () => {

    // TODO: Split header, main, and footer into own components.

    return(
        <div className = 'Container'>
        <header className='Header'>
            <p>Logo</p>
            <button>Facebook</button>
            <button>Twitter</button>
        </header>
    
        <main className='Home'>
            <p>Uhmeegle is a not-so-subtle recreation of the Omegle site that was online from 2009-2023. All features from the original app are intact. Chats are anonymous, but please do reveal personal information such as your name, address or other identifying information.</p>

            <b><p>NOTE: This site is in active development. Message contents are not private and may be seen by developers. Please use caution.</p></b>

            <p>What do you want to talk about?</p>
            <input type="text" />

            <button>Text</button>
            <p>or</p>
            <button>Video</button>

        </main>

        <footer className='Footer'>&copy; <p>Richard Sinclair</p> <a href="https://www.github.com/DudeLovesRPGs">My Github</a></footer>
        </div>
    )


}

export default Home