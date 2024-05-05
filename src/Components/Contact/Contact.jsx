import React from 'react'
import styles from './Contact.module.css'
import { getImageUrl } from '../../utils'
const Contact = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.title}>
<h1>Contact <span className={styles.color}>Us</span></h1>
<h2>Feel free to reach out!</h2>
      </div>
      <ul className={styles.contactLinks}>
<li><img src={getImageUrl('contact/emailIcon.png')} alt="emailIcon" />
<a href="mailto:vivek081094@gmail.com">vivek081094@gmail.com</a>
</li>
<li><img src={getImageUrl('contact/linkedinIcon.png')} alt="linkedinIcon" />
<a href="https://www.linkedin.com/in/vivek-singh-916693134/">www.linkedin.com/in/vivek-singh-916693134</a>
</li>
<li><img src={getImageUrl('contact/githubIcon.png')} alt="githubIcon" />
<a href="https://github.com/vivek81094">https://github.com/vivek81094</a>
</li>
      </ul>
    </footer>
  )
}

export default Contact
