import React from 'react';
import Particles from 'react-particles-js';
import ScrollDownAnimate from './components/ScrollDownAnimate';
import SkillCard from './components/SkillCard/SkillCard';
import skillsData from './components/SkillCard/skillsData';
import ProjectCard from './components/ProjectCard/ProjectCard';
import projectData from './components/ProjectCard/projectData';
import Button from './components/Button/Button';
import './App.css';

const particlesOptions = {
	"particles": {
		"number": {
			"value": 40,
			"density": {
				"enable": true,
				"value_area": 800
			}
		},
		"color":{
			"value": "#ffff00"
		},
		"shape": {
			"type": ["circle", "star"],
			"stroke": {
				"width": 0,
				"color": "#000000"
			}
		},
		"polygon": {
			"nb_sides": 5
		},
		"opacity": {
			"value": 1,
			"random": false,
			"anim": {
				"enable": false,
				"speed": 1,
				"opacity_min": 0.1,
				"sync": false
			}
		},
		"size": {
			"value": 5,
			"random": true,
			"anim": {
				"enable": false,
				"speed": 40,
				"size_min": 0.1,
				"sync": false
			}
		},
		"line_linked": {
			"enable": false,
			"distance": 150,
			"color": "#ffffff",
			"opacity": 0.4,
			"width": 1
		},
		"move": {
			"random": true,
			"speed": 5,
			"direction": "top",
			"out_mode": "out",
			"attract": {
				"enable": false,
				"rotateX": 600,
				"rotateY": 1200
			}
		}
	},
	"interactivity": {
		"events": {
			"onhover": {
				"enable": false,
				"mode": "repulse"
			},
			"onclick": {
				"enable": true,
				"mode": "push"
			}
		},
		"modes": {
			"bubble": {
				"distance": 250,
				"duration": 2,
				"size": 0,
				"opacity": 0
			},
			"repulse": {
				"distance": 400,
				"duration": 4
			}
		}
	}
  }

function App() {
	document.title = 'Thi Nguyen | Portfolio'
	return (
    	<div>
			<div className="header-section">			
			<Particles className="particles" params={particlesOptions}/>			
			<h1 className="header-name">Thi Nguyen</h1>
			<h2 style={{color:'gold'}}>Full Stack Web Developer</h2>
			<ScrollDownAnimate />
			<div className="clouds">
				<img src="cloud1.png" id="cloud1" alt="cloud1"  />
				<img src="cloud2.png" id="cloud2" alt="cloud2"   />
				<img src="cloud3.png" id="cloud3" alt="cloud3"   />
				<img src="cloud4.png" id="cloud4" alt="cloud4"   />
				<img src="cloud5.png" id="cloud5" alt="cloud5"   />				
			</div>
			</div>
			<div className="about-section">
				<h1 style={{textAlign:'center'}}>-- ABOUT ME --</h1>
				<div className="content">				
					<div className="left-section">
					<img src="profile.jpg" alt="profile" />
					</div>
					<div className="right-section">
						<p>
							I'm Thi, a self-taught developer specializing in full-stack development with a passion in creating applications that brings a positive impact to people's life. There is a ton of room for creativity
							in this field and i get excited about the technical aspect of this field where i get to constantly learn new frameworks and tools that come out to further explore
							and help improve my existing knowledge. Here are some of the projects that i have worked on below.
						</p>
						<h4>Phone Number: (253) 670-4939<span style={{marginLeft: '50px'}}>Email: thinguyenx97@gmail.com</span></h4>
						<Button href="Thi-resume.pdf" label="View Resume" styleClass="resume-btn" icon="document.svg" />
						<Button href="https://www.linkedin.com/in/thi-nguyen97/" label="LinkedIn" styleClass="linkedin-btn" icon="linkedin.svg" />
						<Button href="https://github.com/tnguyen36" label="Github" styleClass="github-btn" icon="github.svg" />
						
					</div>
				</div>	
			</div>
			<div className="skill-section">
				<h1 style={{textAlign:'center'}}>-- MY SKILLS --</h1>
				<div className="content">
					{skillsData.map(skill => {
						return <SkillCard key={skill.name} name={skill.name} image={skill.image} styleClass={skill.styleClass} url={skill.url}/>
					})}																	
				</div>		
			</div>
			<div className="project-section">
				<h1 style={{textAlign: 'center'}}>-- PROJECTS --</h1>
				<div className="content">					
					{projectData.map(project => {
						return <ProjectCard key={project.name} name={project.name} description={project.description} image={project.image} liveUrl={project.liveUrl} sourceUrl={project.sourceUrl} />
					})}
				</div>
			</div> 
    	</div>
  	);
}

export default App;
