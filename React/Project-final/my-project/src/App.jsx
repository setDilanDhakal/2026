import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './pages/Home.jsx'
import Footer from './component/Footer.jsx'
import Navigation from './component/Navigation.jsx';
import User from './pages/User.jsx';
import Profile from './pages/Profile.jsx'
import Post from './pages/Post.jsx'
import Albums from './pages/albums.jsx'
import Photo from './pages/Photo.jsx';
import DetailPost from './pages/DetailPost.jsx';
import DetailAlbums from './pages/detailAlbums.jsx'
function App() {


  return (
    <>
      <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/user" element={<User />} />
        <Route path="/user/:id" element={<Profile />} />
        <Route path="/post" element={<Post />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/photo" element={<Photo />} /> 
        <Route path="/post/:id" element={<DetailPost />} />
        <Route path="/albums/:id" element={<DetailAlbums />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
