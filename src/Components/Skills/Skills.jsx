import React from 'react'
import styles from './Skills.module.css'
import skills1 from '../../data/skills1.json'
import skills2 from '../../data/skills2.json'
import { getImageUrl } from '../../utils'
const Skills = () => {
  return (
    <section className={styles.container}>
      <div className={styles.skills_type}>
        <h1 className={styles.heading}>My Technical <span className={styles.color}>Skills</span></h1>
      </div>
      <div className={styles.column}> 
        
<ul className={styles.skillColumn}>
{skills1.map((skill, id)=>{
    return(
      <div key={id}>
        <div className={styles.info} >

            <img src={getImageUrl(skill.imageSrc)} alt={skill.title} className={styles.skillImg}/>
            <h1 className={styles.title}>{skill.title}</h1>
            <h1 className={styles.title}> {skill.percentage}</h1>
            </div> 
            <div className={styles.percentageBar}> <span className={styles.colorBar} style={{width: `${skill.percentage}`}}></span> </div> 
            </div>
        )
})}

</ul>
<ul className={styles.skillColumn}>
{skills2.map((skill, id)=>{
    return(
      <div key={id}>
        <div className={styles.info} >

            <img src={getImageUrl(skill.imageSrc)} alt={skill.title} className={styles.skillImg}/>
            <h1 className={styles.title}>{skill.title}</h1>
            <h1 className={styles.title}> {skill.percentage}</h1>
            </div> 
            <div className={styles.percentageBar}> <span className={styles.colorBar} style={{width: `${skill.percentage}`}}></span> </div> 
            </div>
        )
})}
</ul>
      </div>
    </section>
  )
}

export default Skills
