<html>
<head>
  <title>Enrico Zammit Lonardelli</title>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="/css/main2.css" />
  <link rel="stylesheet" href="/css/font-awesome.min.css">
  <!--This is the menu I have very thankfully stolen from https://codepen.io/una/pen/FEtze-->
  <link rel="stylesheet" href="/css/menu.css">
  <!--This is the table I have very thankfully stolen from https://codepen.io/geoffyuen/pen/FCBEg-->
  <link rel="stylesheet" href="/css/module.css">

</head>

<body>
<div id="popup-modal" class="modal">
      <div class="modal-content animated bounce">
        <a class="modal-close">×</a>
        <center class="modal-img">
        <img src="/img/physics.png" alt="Physics Image" style="height:150px;"> 
        </center>
        <div class="modal-footer">
          <h2>My Physics Portfolio</h2>
          <p>I am currently in my third year of studies in (MPhys) Physics with Theoretical Physics. The following are the modules I have attended at university. Please click on the name of a module to see information about it in the panel to the right or bottom of screen.</p>
        </div>
      </div>
</div>

<div class="modules">
	<div class="menu-section">
	    <div class="menu-toggle">
	      <div class="one"></div>
	      <div class="two"></div>
	      <div class="three"></div>
	    </div>
	    <nav>
	      <ul role="navigation" class="hidden" id="menu-stuff">
	      	<li><a href="index.php">home</a></li>
	        <li><a href="softwareng.php">software engineering</a></li>
	        <li><a href="files/CV.pdf">resume</a></li>
	        <li><a href="contact.php">contact</a></li>
	      </ul>
	    </nav>
	</div>
	<h1>Physics</h1>	
	<table id="tab" class="rwd-table">
	<thead>
	  <tr>
	    <th>Module ID</th>
	    <th>Name <i id="showInfoText" class="fa fa-info-circle" style="color: #ef532d;font-size: 20px;"></i></th>
	    <th id="sortYear">Year <i id="sortYearIcon" class="fa fa-chevron-up"></i> </th>
	  </tr>
	</thead>
	<tbody>
	<!--First Year Courses-->
	  <tr>
	    <td data-th="Module-ID">COMP 14112</td>
	    <td id="COMP14112" data-th="Name">Fund. of Artificial Intelligence</td>
	    <td data-th="Year">1</td>
	  </tr>
	  <tr>
	    <td data-th="Module-ID">PHYS 10071</td>
	    <td  id="PHYS10071" data-th="Name">Mathematics 1</td>
	    <td data-th="Year">1</td>
	  </tr>
	  <tr>
	    <td data-th="Module-ID">PHYS 10101</td>
	    <td  id="PHYS10101" data-th="Name">Dynamics</td>
	    <td data-th="Year">1</td>
	  </tr>
	  <tr>
	    <td data-th="Module-ID">PHYS 10121</td>
	    <td id="PHYS10121"  data-th="Name">Quantum Physics and Relativity</td>
	    <td data-th="Year">1</td>
	  </tr>
	  <tr>
	    <td data-th="Module-ID">PHYS 10191</td>
	    <td id="PHYS10191"  data-th="Name">Introduction to Astrophysics</td>
	    <td data-th="Year">1</td>
	  </tr>
	  <tr>
	    <td data-th="Module-ID">PHYS 10280</td>
	    <td id="PHYS10180"  data-th="Name">Year 1 Laboratory</td>
	    <td data-th="Year">1</td>
	  </tr>
	  <tr>
	    <td data-th="Module-ID">PHYS 10302</td>
	    <td id="PHYS10302"  data-th="Name">Vibrations and Waves</td>
	    <td data-th="Year">1</td>
	  </tr>
	  <tr>
	    <td data-th="Module-ID">PHYS 10342</td>
	    <td id="PHYS10342"  data-th="Name">Electricity & Magnetism</td>
	    <td data-th="Year">1</td>
	  </tr>
	  <tr>
	    <td data-th="Module-ID">PHYS 10352</td>
	    <td  id="PHYS10352" data-th="Name">Properties of Matter</td>
	    <td data-th="Year">1</td>
	  </tr>
	  <tr>
	    <td data-th="Module-ID">PHYS 10372</td>
	    <td id="PHYS10372" data-th="Name">Mathematics 2</td>
	    <td data-th="Year">1</td>
	  </tr>
	  <tr>
	    <td data-th="Module-ID">PHYS 10471</td>
	    <td id="PHYS10471" data-th="Name">Random Processes in Physics</td>
	    <td data-th="Year">1</td>
	  </tr>
	  <tr>
	    <td data-th="Module-ID">PHYS 10672</td>
	    <td id="PHYS10672" data-th="Name">Advanced Dynamics</td>
	    <td data-th="Year">1</td>
	  </tr>
	  <!--Second Year Courses-->
	  <tr>
	    <td data-th="Module-ID">MATH 20122</td>
	    <td id="MATH20122" data-th="Name">Metric Spaces</td>
	    <td data-th="Year">2</td>
	  </tr>
	  <tr>
	    <td data-th="Module-ID">PHYS 20040</td>
	    <td	id="PHYS20040" data-th="Name">General Paper I</td>
	    <td data-th="Year">2</td>
	  </tr>
	  <tr>
	    <td data-th="Module-ID">PHYS 20101</td>
	    <td id="PHYS20101" data-th="Name">Intro. to Quantum Mechanics</td>
	    <td data-th="Year">2</td>
	  </tr>
	  <tr>
	    <td data-th="Module-ID">PHYS 20141</td>
	    <td id="PHYS20141" data-th="Name">Electromagnetism</td>
	    <td data-th="Year">2</td>
	  </tr>
	  <tr>
	    <td data-th="Module-ID">PHYS 20161</td>
	    <td id="PHYS20161"data-th="Name">Intro. to Programming for Physicists</td>
	    <td data-th="Year">2</td>
	  </tr>
	  <tr>
	    <td data-th="Module-ID">PHYS 20171</td>
	    <td id="PHYS20171"data-th="Name">Mathematics of Waves and Fields</td>
	    <td data-th="Year">2</td>
	  </tr>
	  <tr>
	    <td data-th="Module-ID">PHYS 20252</td>
	    <td id="PHYS20252"data-th="Name">Fundamentals of Solid State Physics</td>
	    <td data-th="Year">2</td>
	  </tr>
	  <tr>
	    <td data-th="Module-ID">PHYS 20280</td>
	    <td id="PHYS20280" data-th="Name">Year 2 Laboratory</td>
	    <td data-th="Year">2</td>
	  </tr>
	  <tr>
	    <td data-th="Module-ID">PHYS 20312</td>
	    <td id="PHYS20312" data-th="Name">Wave Optics</td>
	    <td data-th="Year">2</td>
	  </tr>
	  <tr>
	    <td data-th="Module-ID">PHYS 20352</td>
	    <td id="PHYS20352" data-th="Name">Thermal & Stat. Physics</td>
	    <td data-th="Year">2</td>
	  </tr>
	  <tr>
	    <td data-th="Module-ID">PHYS 20401</td>
	    <td id="PHYS20401" data-th="Name">Lagrangian Dynamics</td>
	    <td data-th="Year">2</td>
	  </tr>
	  <tr>
	    <td data-th="Module-ID">PHYS 20672</td>
	    <td id="PHYS20672" data-th="Name">Complex Vars. & Vector Spaces</td>
	    <td data-th="Year">2</td>
	  </tr>
	  <tr>
	    <td data-th="Module-ID">PHYS 20872</td>
	    <td id="PHYS20872" data-th="Name">Theory Computing Project</td>
	    <td data-th="Year">2</td>
	  </tr>
	  <tr>
	    <td data-th="Module-ID">PHYS 20811</td>
	    <td id="PHYS20811" data-th="Name">Professional Development</td>
	    <td data-th="Year">2</td>
	  </tr>		  
<!--THIRD YEAR COURSES-->
	  <tr>
	    <td data-th="Module-ID">PHYS 30121</td>
	    <td id="PHYS30121" data-th="Name">Introduction to Particle and Nuclear Physics</td>
	    <td data-th="Year">3</td>
	  </tr>
	  <tr>
	    <td data-th="Module-ID">PHYS 30151</td>
	    <td id="PHYS30151" data-th="Name">Thermal Physics of Bose and Fermi Gases</td>
	    <td data-th="Year">3</td>
	  </tr>
	  <tr>
	    <td data-th="Module-ID">PHYS 30180</td>
	    <td id="PHYS30180" data-th="Name">Third Year Laboratory</td>
	    <td data-th="Year">3</td>
	  </tr>
	  <tr>
	    <td data-th="Module-ID">PHYS 30201</td>
	    <td id="PHYS30201" data-th="Name">Fundamentals of Quantum Mechanics</td>
	    <td data-th="Year">3</td>
	  </tr>
	  <tr>
	    <td data-th="Module-ID">PHYS 30441</td>
	    <td id="PHYS30441" data-th="Name">Electrodynamics</td>
	    <td data-th="Year">3</td>
	  </tr>
	  <tr>
	    <td data-th="Module-ID">PHYS 30471</td>
	    <td id="PHYS30471" data-th="Name">Introduction to Non-Linear Dynamics</td>
	    <td data-th="Year">3</td>
	  </tr>

	  <tr>
	    <td data-th="Module-ID">COMP 39112</td>
	    <td id="COMP39112" data-th="Name">Quantum Computing</td>
	    <td data-th="Year">3</td>
	  </tr>
	  <tr>
	    <td data-th="Module-ID">PHYS 30672</td>
	    <td id="PHYS30672" data-th="Name">Mathematical Methods for Physics</td>
	    <td data-th="Year">3</td>
	  </tr>
	  <tr>
	    <td data-th="Module-ID">PHYS 40202</td>
	    <td id="PHYS40202" data-th="Name">Advanced Quantum Mechanics</td>
	    <td data-th="Year">3</td>
	  </tr>
	  <tr>
	    <td data-th="Module-ID">PHYS 30392</td>
	    <td id="PHYS30392" data-th="Name">Cosmology</td>
	    <td data-th="Year">3</td>
	  </tr>
	  <tr>
	    <td data-th="Module-ID">PHYS 40352</td>
	    <td id="PHYS40352" data-th="Name">Solid State Physics</td>
	    <td data-th="Year">3</td>
	  </tr>
	  <tr>
	    <td data-th="Module-ID">PHYS 40222</td>
	    <td id="PHYS40222" data-th="Name">Particle Physics</td>
	    <td data-th="Year">3</td>
	  </tr>

	</tbody>
	</table>
</div>

<div id="abstract" class="abstract">
	<div class="wrapper">
	  <div class="grid clearfix">
	    <div class="right">
	      <div class="content">
	        <div class="tab-content">
	          <ul class="list-inline clearfix">
	            <li class="active" onclick="getCurrentSection(this)">Aims</li>
	            <li onclick="getCurrentSection(this)">Credits</li>
	            <li onclick="getCurrentSection(this)">Lecturer/s</li>
	            <li onclick="getCurrentSection(this)">Prerequisite/s </li>
	            <li onclick="getCurrentSection(this)">Followup Courses</li>
	            <li onclick="getCurrentSection(this)">Structure</li>
	            <li onclick="getCurrentSection(this)">Assessment</li>
	            <li onclick="getCurrentSection(this)">Textbooks</li>
	            <li onclick="getCurrentSection(this)">Syllabus</li>
	          </ul>
	          <p id="result"></p>
	        </div>
	      </div>
	    </div>
	  </div>
	</div>
	<!--<h3>Here I intend to add information about each module like the syllabus,objectives and skills.</h3>-->
</div>


</body>

</html>

<script
			  src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
			  integrity="sha256-3edrmyuQ0w65f8gfBsqowzjJe2iM6n0nKciPUp8y+7E="
			  crossorigin="anonymous">
</script>

<script type="text/javascript">
	var modal = document.getElementById('popup-modal');
	var btn = document.getElementById("showInfoText");
	var span = document.getElementsByClassName("modal-close")[0];
	btn.onclick = function () {
	  modal.style.display = "block";
	}
	span.onclick = function () {
	  modal.style.display = "none";
	}
	var currentSection="Aims"
	var currentID="PHYS10071"

  document.getElementsByClassName("menu-toggle")[0].addEventListener("click", menuResponse);
  function menuResponse() {
    document.getElementsByClassName("menu-toggle")[0].classList.toggle("on");
    document.getElementById("menu-stuff").classList.toggle('hidden');
  }

     var rows = $('#tab tr:not(:first)').detach();

    // sort rows by the number in the td with class "pts"
    rows.sort(function (row1, row2) {
        return parseInt($(row1).find('td[data-th="Year"]').text()) - parseInt($(row2).find('td[data-th="Year"]').text());
    }); 

	rows.each(function () {
	        $(this).appendTo('#tab');
	    });
//for (var i=0; i < 24; i++) {
	var tbl = document.getElementById("tab");
	for (var i = 0; i < tbl.rows.length; i++) {
		if(i!=0){
			tbl.rows[i].style.cursor="pointer";
   			tbl.rows[i].onclick = function () { 
   				getInfo(this.children[1].id);
   				$('#tab tr').removeClass("active");
   				this.classList.toggle("active"); };
		}
	}

	function getCurrentSection(section){
		$(".tab-content .active").removeClass("active");
		section.parentNode.classList.toggle("active")
		currentSection=section.innerHTML
		section.classList.toggle('active')
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				document.getElementById("result").innerHTML=this.responseText;
			}
		};
	    xmlhttp.open("GET", "modules.php?id=" + currentID+"&sect="+currentSection, true);
	    xmlhttp.send();
	}
  	// for (var i = 0, row; row = table.rows[i]; i++) {
  	// 	for (var j = 0, col; col = row.cells[j]; j++) {
  	// 		if(j==1){
  	// 			table.rows[i].cells[j].setAttribute("onclick", 'getInfo(table.rows[i].cells[j].id);');
  	// 		}
   // 		}  
  	//   // inputList[2].getElementsByTagName("td")[1].setAttribute("onclick", 'getInfo(inputList[1].getElementsByTagName("td")[1].id);');
  	// }
  // 	for (i = 0; i < list.length; i++) {
  // 		list[i].getElementsByTagName("td")[1].setAttribute("onclick", 'getInfo(list[1].getElementsByTagName("td")[1].id);');
  // }
  //}
  
  function getInfo(text){
  	currentID=text
    var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("result").innerHTML=this.responseText;
		}
	};
    xmlhttp.open("GET", "modules.php?id=" + text+"&sect="+currentSection, true);
    xmlhttp.send();
    document.getElementById("abstract").setAttribute("moduleid",text);
  } 
var desc=1;

$('#showInfoText').on('click',function () {


});


$('#sortYear').on('click', function () {
	if(desc==-1){
		$("#sortYearIcon").removeClass("fa-chevron-down")
		$("#sortYearIcon").addClass("fa-chevron-up")
	}
	else{
		$("#sortYearIcon").removeClass("fa-chevron-up")
		$("#sortYearIcon").addClass("fa-chevron-down")
	}
    // get rows as array and detach them from the table
    var rows = $('#tab tr:not(:first)').detach();

    // sort rows by the number in the td with class "pts"
    desc= -1*desc
    rows.sort(function (row1, row2) {
        return desc*parseInt($(row1).find('td[data-th="Year"]').text()) + -desc*parseInt($(row2).find('td[data-th="Year"]').text());
    });

    // add each row back to the table in the sorted order (and update the rank)
    rows.each(function () {
        $(this).appendTo('#tab');
    });
});

</script>
