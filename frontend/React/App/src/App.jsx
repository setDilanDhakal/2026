
import Head from './component/Head.jsx'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx';
import Footer from './component/Footer.jsx';
import About from './pages/About.jsx'
import Friend from './pages/Friend.jsx';
import Tabs from './pages/Tabs.jsx';
import AsyncFun from './pages/Async.jsx';



function App() {
  return (
    <>
    <BrowserRouter>
    <Head />
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About />} />
        <Route path="/friend" element={<Friend />} />
        <Route path="/tabs" element={<Tabs />} />
        <Route path="/async" element={<AsyncFun />} />
      </Routes>
      <Footer />
    </BrowserRouter>


    </>
  )
}

export default App
