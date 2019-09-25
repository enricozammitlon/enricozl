import React, { Component } from 'react';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      passion: ""
    };
    this.myPassions()
  }

  //Found on https://stackoverflow.com/a/39914235
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  //Found on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  //Function used to iterate through the hobbies and things I am generally passionate about on the homescreen
  async myPassions() {
    var passions = ["Physics", "Dark Matter", "Football","NLP","Machine Learning","Quantum Mechanics","Astrophysics","Boxing","Particle Physics","Linux","FOSS","Raspberry Pi","Hackathons","Cybersecurity","Bug hunting","Exploit Design","Networks","Malware Analysis","Penetration Testing"];
    var i=1;
    while(i==1){
      var num=this.getRandomInt(0,passions.length -1);
      this.setState({
      passion: passions[num]
    }); 
    await this.sleep(1000);
    }
  }

  render() {
  	return(
	  	<div>
			<div id="signature">

			</div>

			<div className="middle-circle">
				<h1 className="giant">Hey!</h1>
				<p className="large">I'm <strong>Enrico.</strong> In short: I love creating, unpacking, analysing and tinkering with any technologies and devices. This website is 
				the epitome of all that and also where I tend to show off whatever I find interesting at the time. I am a physicist by nature but I am passionate about computers so you will find projects
				and information my work in both fields in their respective pages. Please let me know if you find any bugs and if you want to reach out or work on something, please do contact me!
				</p>
				<div className="inline-div"><p className="large">I'm interested in</p> <p className="large" id="passions">{this.state.passion}</p></div>

			</div>
		</div>
	)
  }
}