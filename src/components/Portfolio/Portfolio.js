import React from 'react'
import './Portfolio.css'
import blog from '../../Assest/blog.PNG'
import studenteacherportal from '../../Assest/studentteacherportal.PNG'
import moneymanager from '../../Assest/moneymanager.PNG'
import notes from "../../Assest/Notes.PNG"
import chatty from "../../Assest/chatterbox.PNG"
function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={blog} alt="" />
          </div>
          <h3>Blogger</h3>
          <h5>A Simple App to express your thoughts as Blog</h5>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/PradeepaBharathi/Blogger_Frontend.git"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Frontend
            </a>
            <a
              href="https://github.com/PradeepaBharathi/Blogger_backend.git"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Backend
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
              Frontend
            </a>
            <a
              href="https://github.com/PradeepaBharathi/Money-Manager.git"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Backend
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
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={notes} alt="" />
          </div>
          <h3>Memorandum</h3>
          <h5>
            {" "}
            App to note all the activities of an individual. Implemented Theme
            functionality and JWT Authorization
          </h5>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/PradeepaBharathi/notes_frontend.git"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Frontend
            </a>
            <a
              href="https://github.com/PradeepaBharathi/backend_notes.git"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Backend
            </a>
            <a
              href="https://note-frontend.netlify.app/"
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
            <img src={chatty} alt="" />
          </div>
          <h3>Chatty</h3>
          <h5>
            {" "}
            Full Stack App for end to end conversation. Built using
            React,MongoDb and SockeIo
          </h5>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/PradeepaBharathi/chatterbox-frontend.git"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Frontend
            </a>
            <a
              href="https://github.com/PradeepaBharathi/chatterbox-backend.git"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Backend
            </a>
            <a
              href="https://chatboxfr.netlify.app/"
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