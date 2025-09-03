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

const cvLink = "https://drive.google.com/file/d/1Wu43ix4CIsJLMHo1kR5EvIUbcg1PupSR/view?usp=sharing"

const aboutMeLine1 = `Hello! I'm Ankit, a software engineer who enjoys building things that usually live somewhere on the internet.`
const aboutMeLine2 = `I've been crafting digital experiences since 2017, working everywhere from scrappy startups to global companies. When I'm not debugging production issues at 2 AM, you'll find me exploring new frameworks or planning my next travel adventure.`
const aboutMeLine3 = `Here are the technologies I've been working with lately:`
const technologies = [
	"JavaScript/TypeScript",
	"React",
	"Ruby on Rails", 
	"Python",
	"Node.js",
	"SQL",
	"AWS",
	"MongoDB"
]

const projects = [
	{
		name: "Aruko.World",
		desc: "// Collaborative group travel planning platform addressing real user pain points around trip coordination, payment tracking, and itinerary management.",
		githubUrl: "https://github.com/aki21j/aruko-world",
		webUrl: "https://aruko.world",
		tech: ["React", "Node.js", "MongoDB", "Payment APIs"]
	},
	{
		name: "COVID Vaccine Tracker",
		desc: "// Telegram bot that notified users about available COVID vaccine slots by pincode. Helped thousands secure appointments during the pandemic.",
		githubUrl: "https://github.com/aki21j/vaccine-tracker-bot",
		tech: ["Python", "Telegram API", "AWS EC2", "Cron Jobs"]
	},
	{
		name: "Shellnerd CLI",
		desc: "// Command-line tool to manage oh-my-zsh, SSH, and Git configurations. Supports Ubuntu and macOS for seamless dev environment setup.",
		githubUrl: "https://github.com/aki21j/shellnerd",
		tech: ["Node.js", "CLI", "Shell Scripting", "Git"]
	},
	{
		name: "Portfolio Terminal",
		desc: "// This very portfolio! A retro-future terminal experience with typing animations, glassmorphism, and 3D interactive cards.",
		githubUrl: "https://github.com/aki21j/v1",
		webUrl: "https://aki21j.github.io/v1",
		tech: ["React", "CSS3", "JavaScript"]
	}
]

const contactText = `// Always interested in new challenges and cool projects. Whether you want to build something amazing or just debug life over coffee, let's connect!`

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