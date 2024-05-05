import React, { useState } from "react";
import styles from './ProjectCard.module.css'
import { getImageUrl } from "../../utils";
import { useCollapse } from "react-collapsed";
const ProjectCard = ({project, id}) => {
    const [isExpanded, setExpanded] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse(isExpanded);
  
  return (
    <div key={id} className={styles.projectCard}>
                <img
                  src={getImageUrl(`${project.imageSrc}`)}
                  alt={project.title}
                  className={styles.projectImg}
                />
                <h1 className={styles.title2}>{`Project-${id + 1}`} </h1>

                <div>
                <p className={styles.description}>{`${project.description}`}</p>
                <p
                  {...getCollapseProps()}
                  className={styles.description}
                >{`${project.description1}`}</p>

                <button 
                  {...getToggleProps({
                    onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                  })}
               className={styles.desBtn} >
                  {isExpanded ? "Show Less" : "...Show More"}
                </button>

                </div>
                <ul className={styles.skillContainer}>
                  {project.skills.map((skill, index) => {
                    return (
                      <li key={index} className={styles.skillName}>
                        {skill}
                      </li>
                    );
                  })}
                </ul>
                <div className={styles.skillLinkBox}>
                  <a
                    className={styles.skillLink}
                    href={project.demo}
                    target="blank"
                  >
                    Demo
                  </a>
                </div>
              </div>
  )
}

export default ProjectCard
