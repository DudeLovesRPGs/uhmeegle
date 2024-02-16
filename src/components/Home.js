import React from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import {FacebookShareButton, TwitterShareButton} from 'react-share'


const Home = () => {

    // TODO: Split header, main, and footer into own components.

    return(
        <main className='Home'>
        <Header/>
        <Content/>
        <Footer/>
        </main>
    )


}

export default Home