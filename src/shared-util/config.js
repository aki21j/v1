// // Navigation Bar SECTION
// const navBar = {
// 	show: true,
// };
  
// // Main Body SECTION
// const mainBody = {
// firstName: "Hashir",
// middleName: "",
// lastName: "Shoaib",
// message: " Passionate about changing the world with technology. ",
// icons: [
// 	{
// 	image: "fa-github",
// 	url: "https://github.com/hashirshoaeb",
// 	},
// 	{
// 	image: "fa-facebook",
// 	url: "https://www.facebook.com/hashirshoaeb",
// 	},
// 	{
// 	image: "fa-instagram",
// 	url: "https://www.instagram.com/hashirshoaeb/",
// 	},
// 	{
// 	image: "fa-linkedin",
// 	url: "https://www.linkedin.com/in/hashirshoaeb/",
// 	},
// 	{
// 	image: "fa-twitter",
// 	url: "https://www.twitter.com/hashirshoaeb/",
// 	},
// ],
// };

// // ABOUT SECTION
// // If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
// //a) your Instagram username
// //      i.e:profilePictureLink:"johnDoe123",
// //b) a link to an hosted image
// //      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
// //c) image in "editable-stuff" directory and use require("") to import here,
// //      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
// //d) If you do not want any picture to be displayed, just leave it empty :)
// //      i.e: profilePictureLink: "",
// // For Resume either provide link to your resume or import from "editable-stuff" directory
// //     i.e resume: require("../editable-stuff/resume.pdf"),
// //         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

// const about = {
// show: true,
// heading: "About Me",
// imageLink: require("../editable-stuff/hashirshoaeb.png"),
// imageSize: 375,
// message:
// 	"My name is Hashir Shoaib. I’m a graduate of 2020 from National University of Sciences and Technology at Islamabad with a degree in Computer Engineering. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. In my free time I like working on open source projects.",
// resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
// };

// // PROJECTS SECTION
// // Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
// //      i.e: reposLength: 0,
// // If you want to display specfic projects, add the repository names,
// //      i.e ["repository-1", "repo-2"]
// const repos = {
// show: true,
// heading: "Recent Projects",
// gitHubUsername: "hashirshoaeb", //i.e."johnDoe12Gh"
// reposLength: 4,
// specificRepos: [],
// };

// // Leadership SECTION
// const leadership = {
// show: false,
// heading: "Leadership",
// message:
// 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
// images: [
// 	{ 
// 	img: require("../editable-stuff/hashirshoaeb.png"), 
// 	label: "First slide label", 
// 	paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
// 	},
// 	{ 
// 	img: require("../editable-stuff/hashirshoaeb.png"), 
// 	label: "Second slide label", 
// 	paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
// 	},
// ],
// imageSize: {
// 	width:"615",
// 	height:"450"
// }
// };

// // SKILLS SECTION
// const skills = {
// show: true,
// heading: "Skills",
// hardSkills: [
// 	{ name: "Python", value: 90 },
// 	{ name: "SQL", value: 75 },
// 	{ name: "Data Structures", value: 85 },
// 	{ name: "C/C++", value: 65 },
// 	{ name: "JavaScript", value: 90 },
// 	{ name: "React", value: 65 },
// 	{ name: "HTML/CSS", value: 55 },
// 	{ name: "C#", value: 80 },
// ],
// softSkills: [
// 	{ name: "Goal-Oriented", value: 80 },
// 	{ name: "Collaboration", value: 90 },
// 	{ name: "Positivity", value: 75 },
// 	{ name: "Adaptability", value: 85 },
// 	{ name: "Problem Solving", value: 75 },
// 	{ name: "Empathy", value: 90 },
// 	{ name: "Organization", value: 70 },
// 	{ name: "Creativity", value: 90 },
// ],
// };

// // GET IN TOUCH SECTION
// const getInTouch = {
// show: true,
// heading: "Get In Touch",
// message:
// 	"I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
// email: "hashirshoaeb@gmail.com",
// };

// const experiences = {
// show: false,
// heading: "Experiences",
// data: [
// 	{
// 	role: 'Software Engineer',// Here Add Company Name
// 	companylogo: require('../assets/img/dell.png'),
// 	date: 'June 2018 – Present',
// 	},
// 	{
// 	role: 'Front-End Developer',
// 	companylogo: require('../assets/img/boeing.png'),
// 	date: 'May 2017 – May 2018',
// 	},
// ]
// }

// // Blog SECTION
// // const blog = {
// //   show: false,
// // };

// export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };


const jumbotronOptions = {
	particles: {
	  color: {
		value: "#fff"
	  },
	  opacity: {
		value: 1,
		anim: {
			enable: true
		}
	  },
	  size: {
		  value: 2,
		  random: true,
		  anim: {
			  enable: true,
			  speed: 3
		  }
	  },
	  line_linked: {
		  enable: false
	  },
	  move: {
		  speed: 0.2
	  },
	  collisions: {
		enable: true
	  },
	  shape: {
		type: "circle"
	  },
	  number: {
		value: 200,
		density: {
		  enable: true,
		  value_area: 1000,
		}
	  },
	},
  }


const firstName = "Ankit"
const lastName = "Gupta"

const aboutMeLine1 = `Hello! My name is ${firstName} and I enjoy building things that usually reside on the internet.`
const aboutMeLine2 = `I have been building stuff since 2017 and since then, I've had the privilege of working at multiple companies including startups.`
const aboutMeLine3 = `Here are some technologies I've used:`
const technologies = [
	"Node.js",
	"JavaScript",
	"React",
	"Vue",
	"Python",
	"Django",
	"Electron",
	"Docker"
]

const projects = [
	{
		name: "Personal Website",
		desc: "My portfolio website built using ReactJs and hosted on GitHub pages",
		githubUrl: "https://github.com/aki21j/aki21j.github.io",
		webUrl: "https://aki21j.github.io"
	},
	{
		name: "Shellnerd",
		desc: "My portfolio website built using ReactJs and hosted on GitHub pages",
		githubUrl: "https://github.com/aki21j/shellnerd",
	},
	{
		name: "COVID Vaccine Tracker",
		desc: "My portfolio website built using ReactJs and hosted on GitHub pages",
		githubUrl: "https://github.com/aki21j/vaccine-tracker-bot"
	},
	{
		name: "Desktop Wallpaper Refresher",
		desc: "My portfolio website built using ReactJs and hosted on GitHub pages",
		githubUrl: "https://github.com/aki21j/reddit-wallpaper-refresher"
	}
]

module.exports = {
	jumbotronOptions,
	firstName,
	lastName,
	aboutMeLine1,
	aboutMeLine2,
	aboutMeLine3,
	technologies,
	projects
}