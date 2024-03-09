import logo from './logo.svg';
import './App.css';
import ProfilePage from './pages/profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GalleryPage from './pages/gallery';
import NotFoundPage from './pages/notFound';
import AboutPage from './pages/about';
import HeaderComp from './components/header';
import LoginPage from './pages/loginPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<HeaderComp/>}>
            <Route path='/profile' element={<ProfilePage/>}/>
            <Route path='/gallery' element={<GalleryPage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
          </Route>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
