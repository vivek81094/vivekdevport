import React from 'react'
import About from '../About/About';
import Contact from '../Contact/Contact';
import Project from '../Project/Project';
import Skills from '../Skills/Skills';
import pdf from '../../assets/Resume.pdf'
import { getImageUrl } from '../../utils'
import styles from './Home.module.css'
const Home = () => {

 const onResumeClick=()=> {
    window.open(pdf);
  }
  return (
    <>
    <section className={styles.container}>
<div className={styles.content} >
<h1 className={styles.title}>Hi, My Name is Vivek <span className={styles.color}>Singh</span></h1>
      <p className={styles.description}>I'm a Passionate Full Stack Developer, currently <br /> wrapping up two exciting freelancing projects."</p>
      <a onClick={onResumeClick} className={styles.contactBtn} target="_blank" rel="noopener noreferrer">Download CV</a>
      </div>
      <img src={getImageUrl("hero/homeImg.png")} alt="main image" className={styles.mainImg}/>
    
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
    
    <About/>
      <Skills/>
      <Project/>
      <Contact/>
    </>
  )
}

export default Home
