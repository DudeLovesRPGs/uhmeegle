import React from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

//TODO:Decide whether to implement these,or delete at a later date. 
import {FacebookShareButton, TwitterShareButton} from 'react-share'


const Home = () => {

    

    return(
        <main className='Home'>
        <Header/>
        <Content/>
        <Footer/>
        </main>
    )


}

export default Home