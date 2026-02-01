import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
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
import Register from './pages/Register.jsx';

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

function App() {
  const location = useLocation();
  const hideNavAndFooter = location.pathname === '/register';

  return (
    <>
      {!hideNavAndFooter && <Navigation />}
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/user" element={<User />} />
        <Route path="/user/:id" element={<Profile />} />
        <Route path="/post" element={<Post />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/photo" element={<Photo />} /> 
        <Route path="/post/:id" element={<DetailPost />} />
        <Route path="/albums/:id" element={<DetailAlbums />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {!hideNavAndFooter && <Footer />}
    </>
  )
}

export default AppWrapper;
