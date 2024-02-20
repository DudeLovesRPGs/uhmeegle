import './App.css';
import Home from './components/Home'
import ChatPage from './components/ChatPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
/*TODO [ChatPage]: Find a way to make 'chat' route private so user cannot access access by going to /chat*/


  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "chat" element = {<ChatPage/>}/>
      </Routes>
        
    </Router>
  )
  }

export default App;
