import React, { useState } from "react";
import styles from "./Project.module.css";
import ProjectCard from './ProjectCard'
import project from "../../data/projects.json";

const Project = () => {

  return (
    <section className={styles.container}>
      <div>
        <h1 className={styles.title}>
          Latest <span className={styles.color}>Projects</span>
        </h1>
        <div className={styles.box}>
          {project.map((project, id) => {
            return (
              <ProjectCard project={project} id={id}/>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Project;
