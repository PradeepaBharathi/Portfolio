import React from 'react'
import './Portfolio.css'
import blog from '../../Assest/blog.PNG'
import studenteacherportal from '../../Assest/studentteacherportal.PNG'
import moneymanager from '../../Assest/moneymanager.PNG'
function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={blog} alt="" />
          </div>
          <h3>Blogger</h3>
          <h5>A Simple App to express your thoughts as Blogd</h5>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/PradeepaBharathi/Blogger_Frontend.git"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://bloggerfrontend.netlify.app//"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={studenteacherportal} alt="" />
          </div>
          <h3>Student Teacher Portal</h3>
          <h5> CRUD application to manage the student teacher portal</h5>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/PradeepaBharathi/stud-mentor.git"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://harmonious-croquembouche-e18fbe.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={moneymanager} alt="" />
          </div>
          <h3>Money Manager</h3>
          <h5>
            {" "}
            A full stack app which is used to track the income and expenses of
            an individual
          </h5>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/PradeepaBharathi/Money-Manager-Frontend.git"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://soft-sunflower-1bc180.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio