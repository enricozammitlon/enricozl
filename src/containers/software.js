import React, { Component } from "react";

export default class Software extends Component {

	render() {

		return(

		<div>

			<h1>Tech</h1>
			<p>
			  Below are some of the projects/hackathons I have participated in and languages & framweorks I have
			  had some experience in. For more projects check out my <a target="_blank" href="https://github.com/enricozammitlon">Github!</a>
			</p>

			<h3>HackCity18</h3>
			<p>First place in Firstco's challenge 'Most Innovative Hack Incorporating Transportation' for webapp <a target="_blank" href="http://tubeamp.me">TubeAmp</a>.<br></br> A webapp that takes a departure and destination station in the London Underground and creates a spotify playlist that includes the names of the stations in between the two inputted and the length of the playlist is of the length of the journey.<br></br>
			My part was connecting the webapp with the TFL API to get all the station names and times & making the actual website for the webapp to run on.
			<b>Languages</b> used were <strong> HTML,JS,Python </strong> and <b> framework</b> used was <strong>Flask for Python</strong>.<br></br>
			Project available on <a target="_blank" href="https://github.com/enricozammitlon/CityHack2018"> Github </a>
			</p>

			<h3>KingMe</h3>
			<p>Was my A-Level project in computing. It's a checkers game to play against an artificial intelligence that uses a Min-Max based approach.
			  <br></br>Although quite a naive approach to the problem, it taught me a lot in the whole AI approach to machine learning and now, almost 4 years after,
			  I look forward to trying this project again with a different machine learning approach.
			<b>Languages</b> used were <strong> Java</strong>.<br></br>
			Project available on <a target="_blank" href="https://github.com/enricozammitlon/KingMe"> Github </a>
			</p>

			<h3>ETA</h3>
			<p>This was a small personal,project I made for my father. It is a web application to track items via a database and be able to carry out 
			basic operations like deletion,addition and updating of items.<br></br> It has inbuilt multiuser,multiadmin capabilities and has additional functionalities such as adding fields like images and documents. This project is not complete but requires quite a bit of polishing and security increase.<br></br>
			It was particularly fun to carry out this project due to it being a rather full-stack experience. 
			<b>Languages</b> used were <strong> HTML,JS,PHP,SQL </strong> and <b> technologies</b> used were <strong>MariaDB Database,Herokuapp</strong>.<br></br>
			Project available on <a target="_blank" href="https://github.com/enricozammitlon/eta"> Github </a>
			</p>

			<h3>This Website</h3>
			<p>This particular website has been a personal project running since December 2017. It has been an incredible learning experience because of the 
			  amount of technologies that I needed to use.<br></br> First of all I rented a droplet on DigitalOcean for a simple 1GB RAM and 25GB hard disk and installed Debian Stretch on it. Currently, there are 3 versions running of this website (2 on idle and 1 active at any time) which are implementations in Python+Flask+WSGI & Apache, PHP on LAMP and Vue.js+Nuxt.js+Nginx. <br></br>Currently, this is the PHP version running. 
			  <br></br>There is also a mail server running which required tinkering around with Apache configuration , nameservers and virtual hosts but it was a
			  very rewarding experience and now I have my own <a href="mailto:enrico@enricozl.me">Email!</a> <br></br>
			<b>Languages</b> used were <strong> HTML, JS, PHP, SQL, Python, Bash </strong> and <b> technologies</b> used were <strong>Linux Architecture, Apache, Nginx, Nameservers, Mailserver, Webserver, Fileserver, Vue.js, Node.js, Nuxt.js</strong>.<br></br>
			Project (will be) available on <a target="_blank" href="https://github.com/enricozammitlon/enricozl"> Github </a> 😁 .
			</p>

		</div>
		)
	}
}