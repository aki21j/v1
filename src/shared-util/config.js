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
const emailId = "ankitgupta21j@gmail.com"

const cvLink = "https://drive.google.com/file/d/1CgREkc443XzA5iofvdxi9uoZe2Vox5Hn/view?usp=sharing"

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
		githubUrl: "https://github.com/aki21j/personal-website",
		webUrl: "https://aki21j.github.io"
	},
	{
		name: "Shellnerd",
		desc: "Shellnerd is a CLI that can be used to manage GitHub user config, ssh key config and zsh config on a user's computer.",
		githubUrl: "https://github.com/aki21j/shellnerd",
	},
	{
		name: "COVID Vaccine Tracker",
		desc: "A Telegram based bot that notifies the user if a vaccination slot is available at the user subscribed pincode.",
		githubUrl: "https://github.com/aki21j/vaccine-tracker-bot"
	},
	{
		name: "Desktop Wallpaper Refresher",
		desc: "A Python application that can automatically updated your desktop background from either the available images, or from a list of subreddits.",
		githubUrl: "https://github.com/aki21j/reddit-wallpaper-refresher"
	}
]

const contactText = `I am always open to collabarate on interesting projects. So, whether you have a question or just want to say hi, drop me a message @${emailId} and I'll get back to you!`

const linkedinUrl = "https://linkedin.com/in/ankit-gupta-21j"
const githubUrl = "https://github.com/aki21j"
const stackoverflowUrl = "https://stackoverflow.com/users/10293708/ankit-gupta"
const instagramUrl = "https://www.instagram.com/I_ankit.gupta/"

module.exports = {
	jumbotronOptions,
	firstName,
	lastName,
	emailId,
	cvLink,
	aboutMeLine1,
	aboutMeLine2,
	aboutMeLine3,
	technologies,
	projects,
	contactText,
	linkedinUrl,
	githubUrl,
	stackoverflowUrl,
	instagramUrl
}