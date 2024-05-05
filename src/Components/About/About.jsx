import React from 'react'
import styles from './About.module.css'
import { getImageUrl } from '../../utils'
const About = () => {
  return (
    <section className={styles.container}>
      <img src={getImageUrl('about/about.png')} alt="About" className={styles.aboutImg}/>
      <div className={styles.content}>
        
      <h1 className={styles.title}>About <span className={styles.color}>Me</span></h1>
      <h2 className={styles.heading}>Front-End Developer</h2>
      <p className={styles.description}> I am a dynamic front-end developer with a strong foundation in graphic design, boasting two years of experience. My creativity and professional skills shine through in my work, making me a valuable asset to any team. With two successful freelancing projects under my belt, I've demonstrated my ability to craft visually appealing and responsive websites that prioritize user experience. I'm passionate about my craft and deeply committed to optimizing website performance and ensuring accessibility for all users. My project management expertise and collaborative approach further enhance my reputation as a skilled and dedicated front-end developer.</p>

      </div>
    </section>
  )
}

export default About
