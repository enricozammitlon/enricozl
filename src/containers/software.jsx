import React from 'react';

export default function Software() {
  return (
    <div>
      <h1>Tech</h1>
      <p>
        Below are some of the projects/hackathons I have participated in and languages & frameworks
        I have had some experience in. There are also the projects I am currently interested in and
        the ones I plan to tackle soon. For more projects check out my
        <span style={{ paddingRight: '5px', paddingLeft: '5px' }}>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/enricozammitlon">
            Github
          </a>
        </span>
        .
      </p>
      <h2>Notable Projects</h2>
      <h3>Superheroes In Science Project</h3>
      <p>
        What started out as a simple website as favour to a journalist friend of mine has changed
        into one of my most intense and largest projects I currently have going on.&nbsp;
        <br />
        <br />
        &nbsp;It is an initiative to design a completely online superhero themed science competition
        for children and students ranging from 9 to 14 years old. This is a free, open nationwide
        (Malta) for the duration of 5 months every school year. The main aim for this is to
        popularise science and to give a chance to young, bright students - irrispective of
        background - to create a science project of their own.
        <br />
        <br />
        &nbsp; I felt like it was my duty as technology advocate but also having been a student
        myself to give an opportunity to children like I was given when I was their age and which
        surely had an impact on becoming who I am today. I therefore single-handedly and free of
        charge designed and maintain the completely online science competition. It includes a
        serverless lambda API with Node.js on AWS services (built with security in mind using
        resource based policies enforced through IAM) with a self-scalable client service on
        React.js. It was developed using CI/CD pipelines with Docker and Cloudformation to keep the
        whole pipeline efficient and secure.
        <br />
        <br />
        <b>Languages</b>
        &nbsp;used were&nbsp;
        <strong>HTML, JS, CSS</strong>
        &nbsp;and&nbsp;
        <br />
        <b>technologies</b>
        &nbsp;used&nbsp;
        <strong>
          Serverless, Gitlab, AWS Lambda, API Gateway, CloudFormation, React.js, Material UI,
          DynamoDB, AWS IAM, AWS Cognito, Netlify
        </strong>
        .
        <br />
        Project is a private repository but website can be found
        <span style={{ paddingRight: '5px', paddingLeft: '5px' }}>
          <a target="_blank" rel="noopener noreferrer" href="https://superheroscience.info">
            here
          </a>
        </span>
        .
      </p>

      <h3>This Website</h3>
      <p>
        This website has been a personal project running since December 2017. It has been an
        incredible learning experience because of the amount of technologies that I have used over
        the years.
        <br />
        <br />
        &nbsp;I have rewritten this website so many times it has become my little baby. Originally
        it used to be a python Flask server running on a Lenovo T61 Laptop (that I bought from ebay
        for 25 euros) connected to my home network - I know!
        <br />
        <br />
        &nbsp;Then, one rainy day, this computer died on me and me being pretty young and naive had
        taken no backups. However I took the opportunity to remake everything, put it on a Github
        repository and this time rent out a DigitalOcean droplet. The droplet had 1GB RAM and 25GB
        hard disk and installed Debian Stretch on it.
        <br />
        <br />
        &nbsp;Tired of paying $5 per month and more for the hell of it, I changed architecture again
        and now host this via Netlify on a React.js frontend. I also wanted to experiment with
        Firebase so I converted the logic to get my university modules information to an API hosted
        on a serverless stack with the Google cloud suite. It was really fun and I&apos;m happy to
        see it working!
        <br />
        &nbsp;The three versions I had created are implementations in Python+Flask+WSGI & Apache,
        PHP on LAMP and React.js+Netlify+Git CI/CD+Firebase API.
        <br />
        <b>Languages</b>
        &nbsp;used were
        <strong> HTML, JS, PHP, SQL, Typsecript, YAML, Python, Bash </strong>
        and&nbsp;
        <b>technologies</b>
        &nbsp;used were&nbsp;
        <strong>
          Linux Architecture, Apache, Nginx, Nameservers, Mailserver, Webserver, Netlify, React.js,
          Node.js, XAMPP
        </strong>
        <br />
        Project available on
        <span style={{ paddingRight: '5px', paddingLeft: '5px' }}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/enricozammitlon/enricozl"
          >
            Github
          </a>
        </span>
        😁
      </p>
      <h2>Other Projects</h2>
      <h3>HackCity18</h3>
      <p>
        First place in Firstco&apos;s challenge &apos;Most Innovative Hack Incorporating
        Transportation&apos; for webapp
        <span style={{ paddingRight: '5px', paddingLeft: '5px' }}>
          <a target="_blank" rel="noopener noreferrer" href="http://tubeamp.me">
            TubeAmp
          </a>
        </span>
        .
        <br />
        A webapp that takes a departure and destination station in the London Underground and
        creates a spotify playlist that includes the names of the stations in between the two
        inputted and the length of the playlist is of the length of the journey.
        <br />
        My part was connecting the webapp with the TFL API to get all the station names and times &
        making the actual website for the webapp to run on.&nbsp;
        <b>Languages</b>
        &nbsp;used were
        <strong> HTML,JS,Python </strong>
        and&nbsp;
        <b>framework</b>
        &nbsp;used was&nbsp;
        <strong>Flask for Python</strong>
        .
        <br />
        Project available on
        <span style={{ paddingRight: '5px', paddingLeft: '5px' }}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/enricozammitlon/CityHack2018"
          >
            Github
          </a>
        </span>
      </p>
      <h3>KingMe</h3>
      <p>
        Was my A-Level project in computing. It&apos;s a checkers game to play against an artificial
        intelligence that uses a Min-Max based approach.
        <br />
        Although quite a naive approach to the problem, it taught me a lot in the whole AI approach
        to machine learning and now, almost 4 years after, I look forward to trying this project
        again with a different machine learning approach.
        <b>Languages</b>
        &nbsp;used were
        <strong> Java</strong>
        .
        <br />
        Project available on
        <span style={{ paddingRight: '5px', paddingLeft: '5px' }}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/enricozammitlon/KingMe"
          >
            Github
          </a>
        </span>
      </p>
    </div>
  );
}
