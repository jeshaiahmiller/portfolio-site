import React from 'react';
import './About.css'
import { useEffect } from 'react';

export default function About() {

  useEffect(() => {
    document.body.className = 'about-body';
}, []);
  const icons = [
    {
      name: "Javascript",
      img: "https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor"
    },
    {
      name: "HTML",
      img: "https://icongr.am/devicon/html5-original.svg?size=128&color=currentColor"
    },
    {
      name: "CSS",
      img: "https://icongr.am/devicon/css3-original.svg?size=128&color=currentColor"
    },
    {
      name: "Python",
      img: "https://icongr.am/devicon/python-original.svg?size=128&color=currentColor"
    },
    {
      name: "Django",
      img: "https://icongr.am/devicon/django-original.svg?size=128&color=currentColor"
    },
    {
      name: "Node.js",
      img: "https://icongr.am/devicon/nodejs-original.svg?size=128&color=currentColor"
    },
    {
      name: "React",
      img: "https://icongr.am/devicon/react-original.svg?size=128&color=currentColor"
    },
    {
      name: "MySQL",
      img: "https://icongr.am/devicon/mysql-original.svg?size=128&color=currentColor"
    },
    {
      name: "Postgresql",
      img: "https://icongr.am/devicon/postgresql-original.svg?size=128&color=currentColor"
    },
    {
      name: "Express",
      img: "https://icongr.am/devicon/express-original.svg?size=128&color=currentColor"
    },
    {
      name: "Mongodb",
      img: "https://icongr.am/devicon/mongodb-original.svg?size=128&color=currentColor"
    },
    {
      name: "Heroku",
      img: "https://icongr.am/devicon/heroku-original.svg?size=128&color=currentColor"
    }
  ]


  return ( 
    <div className="about-parent">
      <div className="bio">
      <h1 className="name">About Me</h1>
        <h2>I am a full-stack developer with a passion for learning. Since I started my coding journey, I have grown my skills in problem-solving and effective work ethic. I have a potent admiration for challenges since they force me to pick my brain and hone my problem-solving skills. Ever since I coded my first "Hello World," I knew programming was my passion.</h2>
        
      </div>
      <div className="skills-title">
        <h1>Technical Skills</h1>
      </div>
      <div className="icons">
        {icons.map(icon => (
          <div className="individual">
            <img src={icon.img} alt={icon.name}/>
            <h2>{icon.name}</h2>
            </div>
        ))}
      </div>
    </div>
  )
}
