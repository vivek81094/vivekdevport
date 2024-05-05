
import { Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Project from './Components/Project/Project';
import Skills from './Components/Skills/Skills';
const App = () => {
  return (
    <div className={styles.App}>
      <Navbar/>
      

      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>

    </div>
  )
}

export default App;
