<?php

// get the q parameter from URL
$q = $_REQUEST["id"];
$sect = $_REQUEST["sect"];


$myfile = fopen(".modules/".$q.".txt", "r") or die("Information not available yet! Try another module.");
$contents= fread($myfile,filesize(".modules/".$q.".txt"));

$start=strpos($contents,"CREDITS:")+8;
$length=strpos($contents,"---")-1;
$credits= substr($contents,$start,$length-$start);
$contents=substr($contents,strpos($contents,"---")+3);

$start=strpos($contents,"LECTURER/S:")+11;
$length=strpos($contents,"---")-1;
$lecturers= substr($contents,$start,$length-$start);
$contents=substr($contents,strpos($contents,"---")+3);

$start=strpos($contents,"PREREQ:")+7;
$length=strpos($contents,"---")-1;
$prereq= substr($contents,$start,$length-$start);
$contents=substr($contents,strpos($contents,"---")+3);

$start=strpos($contents,"FOLLOWUP:")+9;
$length=strpos($contents,"---")-1;
$followup= substr($contents,$start,$length-$start);
$contents=substr($contents,strpos($contents,"---")+3);

$start=strpos($contents,"CLASSES:")+8;
$length=strpos($contents,"---")-1;
$classes=substr($contents,$start,$length-$start);
$contents=substr($contents,strpos($contents,"---")+3);

$start=strpos($contents,"ASSESMENT:")+10;
$length=strpos($contents,"---")-1;
$assesment= substr($contents,$start,$length-$start);
$contents=substr($contents,strpos($contents,"---")+3);

$start=strpos($contents,"AIMS:")+5;
$length=strpos($contents,"---")-1;
$aims= substr($contents,$start,$length-$start);
$contents=substr($contents,strpos($contents,"---")+3);

$start=strpos($contents,"TXTBOOKS:")+9;
$length=strpos($contents,"---")-1;
$textbooks= substr($contents,$start,$length-$start);
$contents=substr($contents,strpos($contents,"---")+3);

$start=strpos($contents,"SYLLABUS:")+9;
$length=strpos($contents,"---")-1;
$syllabus= substr($contents,$start,$length-$start);

if($sect==="Aims"){
	echo $aims;
}
else if ($sect==="Credits"){
	echo $credits;
}
else if ($sect==="Lecturer/s"){
	echo $lecturers;
}
else if ($sect==="Prerequisite/s"){
	echo $prereq;
}
else if ($sect==="Followup Courses"){
	echo $followup;
}
else if ($sect==="Structure"){
	echo $classes;
}
else if ($sect==="Assessment"){
	echo $assesment;
}
else if ($sect==="Textbooks"){
	echo $textbooks;
}
else if ($sect==="Syllabus"){
	echo $syllabus;
}

fclose($myfile);
?>