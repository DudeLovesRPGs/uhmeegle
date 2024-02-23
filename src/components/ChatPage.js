import React from 'react'
import Header from './Header';
import Chat from './Chat';
const ChatPage = () => {
    return(<main className='ChatPage'>
        <Header/>
        <Chat/>
        <div id='chatButtonRow'>
    <button id='disconnectButton'>Disconnect</button>
    <textarea></textarea>
    <button id = 'sendButton'>Send</button>
  </div>
    </main>)
}

export default ChatPage;