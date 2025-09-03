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

const cvLink = "https://drive.google.com/file/d/14y30P99pc37VhwQt1CLEC9GwIRGcIFPQ/view?usp=drive_link"

const aboutMeLine1 = `// Developer by day, digital architect by passion. I craft experiences that live where code meets creativity.`
const aboutMeLine2 = `Started my journey in 2017, turning coffee into code and ideas into scalable solutions. From startups to scale-ups, I've helped build the future one commit at a time.`
const aboutMeLine3 = `// Current tech stack and favorite tools:`
const technologies = [
	"Node.js",
	"JavaScript",
	"React",
	"Vue",
	"Ruby",
	"Python",
	"Django",
	"Electron",
	"Docker"
]

const projects = [
	{
		name: "Portfolio Terminal",
		desc: "// A retro-future portfolio with terminal aesthetics, typing animations, and glassmorphism. Built with React hooks and modern CSS.",
		githubUrl: "https://github.com/aki21j/v1",
		webUrl: "https://aki21j.github.io/v1",
		tech: ["React", "CSS3", "JavaScript"]
	},
	{
		name: "Shellnerd CLI",
		desc: "// Command-line productivity tool for developers. Streamlines GitHub config, SSH keys, and shell setup with a single command.",
		githubUrl: "https://github.com/aki21j/shellnerd",
		tech: ["Node.js", "CLI", "Git"]
	},
	{
		name: "Vaccine Tracker Bot",
		desc: "// Real-time Telegram bot that solved India's vaccination slot shortage. Helped 1000+ users secure appointments during COVID-19.",
		githubUrl: "https://github.com/aki21j/vaccine-tracker-bot",
		tech: ["Python", "Telegram API", "Cron"]
	},
	{
		name: "Desktop Aesthetic Bot",
		desc: "// Python automation that curates your desktop wallpaper from Reddit's finest subreddits. Because even your desktop deserves good design.",
		githubUrl: "https://github.com/aki21j/reddit-wallpaper-refresher",
		tech: ["Python", "Reddit API", "Automation"]
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