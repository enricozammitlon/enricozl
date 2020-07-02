import React, { Component } from "react";

export default class Software extends Component {

	render() {

		return (

			<div>

				<h1>Tech</h1>
				<p>
					Below are some of the projects/hackathons I have participated in and languages & framweorks I have
			  had some experience in. There are also the projects I am currently interested in and the ones I plan to tackle soon.For more projects check out my <a target="_blank" href="https://github.com/enricozammitlon">Github!</a>
				</p>

				<h3>This Website</h3>
				<p>This particular website has been a personal project running since December 2017. It has been an incredible learning experience because of the
			  amount of technologies that I have used over the years.<br></br>
			  I have rewritten this website so many times it has become my little baby. Originally it used to be a python Flask server running on a Lenovo T61 Laptop (that I bought from ebay for 25 euros) connected at my house - I know!
			  Then, one rainy day, this computer died and I was pretty sad since I had been very dumb and took no backups. However I took the opportunity to remake everything, put it on a github repo and this time rent out a DigitalOcean droplet.
			  The droplet had 1GB RAM and 25GB hard disk and installed Debian Stretch on it.
			  As of this time, each branch of the repo holds a different implementation of the website - with a few different themes throughout.<br></br>
			  Tired of paying $5 and more for the hell of it, I have changed architecture again and now host this via Netlify on a React.js frontend while also wanting to experiment with Firebase so I converted the logic to get my university modules information
			  to an API hosted on a serverless stack with the Google cloud suite. It was really fun and I'm happy to see it working! .<br></br>
			  The three versions I have created are implementations in Python+Flask+WSGI & Apache, PHP on LAMP and React.js+Netlify+Git CI/CD+Firebase API. <br></br>

					<b>Languages</b> used were <strong> HTML, JS, PHP, SQL, Typsecript, YAML, Python, Bash </strong> and <b> technologies</b> used were <strong>Linux Architecture, Apache, Nginx, Nameservers, Mailserver, Webserver, Netlify, React.js, Node.js, XAMPP</strong>.<br></br>
			Project (will be) available on <a target="_blank" rel="noopener noreferrer" href="https://github.com/enricozammitlon/enricozl"> Github </a> 😁 .
			</p>

				<h3>VoIP on Raspberry Pi-Coming Soon</h3>
				<p>This project I am very excited about. Do checkout my blog as I plan to publish it there soon but for now the gist is I want to setup an encrypted VoIP server running on a Raspberry v4. So many things to try out I can't wait.
				This also stems out of a conversation I had at 44con but for that checkout my blogpost!
			</p>

				<h3>HackCity18</h3>
				<p>First place in Firstco's challenge 'Most Innovative Hack Incorporating Transportation' for webapp <a target="_blank" rel="noopener noreferrer" href="http://tubeamp.me">TubeAmp</a>.<br></br> A webapp that takes a departure and destination station in the London Underground and creates a spotify playlist that includes the names of the stations in between the two inputted and the length of the playlist is of the length of the journey.<br></br>
			My part was connecting the webapp with the TFL API to get all the station names and times & making the actual website for the webapp to run on.
			<b>Languages</b> used were <strong> HTML,JS,Python </strong> and <b> framework</b> used was <strong>Flask for Python</strong>.<br></br>
			Project available on <a target="_blank" rel="noopener noreferrer" href="https://github.com/enricozammitlon/CityHack2018"> Github </a>
				</p>

				<h3>KingMe</h3>
				<p>Was my A-Level project in computing. It's a checkers game to play against an artificial intelligence that uses a Min-Max based approach.
			  <br></br>Although quite a naive approach to the problem, it taught me a lot in the whole AI approach to machine learning and now, almost 4 years after,
			  I look forward to trying this project again with a different machine learning approach.
			<b>Languages</b> used were <strong> Java</strong>.<br></br>
			Project available on <a target="_blank" rel="noopener noreferrer" href="https://github.com/enricozammitlon/KingMe"> Github </a>
				</p>
				{/*}
			<h3>Superhero Science Project</h3>
			<p> What started out as a simple website as favour to a journalist friend of mine has changed into one of my most intense and largest projects I currently have going on.

			<b>Languages</b> used were <strong> HTML,JS,PHP,SQL </strong> and <b> technologies</b> used were <strong>MariaDB Database,Herokuapp</strong>.<br></br>
			Project available on <a target="_blank" href="https://github.com/enricozammitlon/eta"> Github </a>
			</p>
			{*/}
			</div>
		)
	}
}