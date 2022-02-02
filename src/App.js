import Navbar from './navbar/Navbar'
import Content from './content/Content'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Profile from './pages/my-profile/Profile'
import Question from './sub-source/question/Question'
import NoMatch from './sub-source/noMatch/NoMatch'
import Experience from './pages/my-profile/profileMenu/experience/Experience'
import './App.css';
import { BrowserRouter, Routes, Route, Outlet} from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <div className="background"></div>
        <div className="container">
          <Navbar></Navbar>
          <Routes>
            <Route index path='/' element={<Content />} />
            <Route path='about-me' element={<About />} />
            <Route path='my-profile' element={<Profile />} >
                <Route path='st' element={<Experience/>}></Route>
            </Route>
            <Route path='contact' element={<Contact />} />
            <Route path='question' element={<Question />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
          <Outlet />
        </div>
      </div>

    </BrowserRouter>

  )
}

export default App;
