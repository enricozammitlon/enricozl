<html>
<head>
  <title>Enrico Zammit Lonardelli</title>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="/css/main2.css" />
  <link rel="stylesheet" href="/css/font-awesome.min.css">
  <!--This is the menu I have very thankfully stolen from https://codepen.io/una/pen/FEtze-->
  <link rel="stylesheet" href="/css/menu.css">
</head>

<?php
  
?>

<body>
  <div class="menu-section">
    <div class="menu-toggle">
      <div class="one"></div>
      <div class="two"></div>
      <div class="three"></div>
    </div>
    <nav>
      <ul role="navigation" class="hidden" id="menu-stuff">
        <li><a href="softwareng.php">software engineering</a></li>
        <li><a href="physics.php">physics</a></li>
        <li><a href="files/CV.pdf">resume</a></li>
        <li><a href="contact.php">contact</a></li>
      </ul>
    </nav>
  </div>

  <div id="signature">

  </div>

  <div class="middle-circle">
  <h1 class="giant">Hey!</h1>
  <p class="large">I'm <strong>Enrico.</strong></p>
  <div class="inline-div"><p class="large">I'm passionate about</p> <p class="large" id="passions"></p></div>
  <div id="social-div">
    <ul class="social">
      <li><a href="https://www.linkedin.com/in/enrico-zammit-lonardelli/" class="icon alt fa-linkedin"></a></li>
      <li><a href="https://github.com/enricozammitlon" class="icon alt fa-github"></a></li>
    </ul>
    </div>
  </div>
</body>

</html>

<script type="text/javascript">

  window.addEventListener('load', myPassions);
  document.getElementsByClassName("menu-toggle")[0].addEventListener("click", menuResponse);
  
  //Found on https://stackoverflow.com/a/39914235
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  //Found on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function menuResponse() {
    document.getElementsByClassName("menu-toggle")[0].classList.toggle("on");
    document.getElementById("menu-stuff").classList.toggle('hidden');
  }


  //Function used to iterate through the hobbies and things I am generally passionate about on the homescreen
  async function myPassions() {
    var passions = ["Physics", "Programming", "Football","Quantum<br>Mechanics","Astrophysics","Boxing","Cycling","Particle<br>Physics","Linux","FOSS","Solid<br>State","Reading","Chess","Group<br>Theory","Hackathons","Dogs","Colour<br>Orange","Cars","Movies"];
    var i=1;
    while(i==1){
      var num=getRandomInt(0,passions.length -1);
      document.getElementById('passions').innerHTML = passions[num];
      await sleep(1000);
    }
  }

</script>