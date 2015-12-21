
var formattedName, formattedRole;
var myName ="Sejal Shah";
var myRole="   Web developer";

var bio = {
	"name" : myName,
	"role" : myRole,
	"contacts" : [{
		"mobile" : "444-44-4444",
		"email" : "sejal6289@gmail.com",
		"linkedin" : "sejal6289",
		"github" : "sejal6289",
		"location" : "Hillsboro, Oregon"
	}],
	"welcomemessage" : "<br>This letter is to express my interest for Web Developer. I have expertise in HTML, CSS, Javascript, Java, PL/SQL. The unique mix of my software development experience, programming skills, projects and motivation to excel makes me an ideal fit for this position. I have 3 years of collective experience in Software development after completing my Bachelor’s degree in Information Technology from University of Mumbai, India.",
	"skills" : ["HTML/HTML5","CSS/Bootstrap", "JavaScript(Jquery)", "Java", "C++", "C", "PL/SQL", "Android development"],
	"biopic" : "images/me.jpg"
}


bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedImage = HTMLbioPic.replace("%data%",bio.biopic);
	var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomemessage);
	$("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage,formattedMessage);
	$("#header").append(HTMLskillsStart);

	for(skill in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
		$("#skills").append(formattedSkills);
	};

	for(contact in bio.contacts) {
		var formattedMobile = HTMLmobile.replace("%data%",bio.contacts[contact].mobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts[contact].email);
		var formattedGithub = HTMLgithub.replace("%contact%","Github").replace("%data%",bio.contacts[contact].github);
		var formattedLocation =HTMLlocation.replace("%data%", bio.contacts[contact].location);
		var formattedTwitter =HTMLlinkedin.replace("%data%", bio.contacts[contact].linkedin);
       	$("#footerContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedTwitter,formattedLocation);
		$("#topContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedTwitter,formattedLocation);
	};
}



var education = {
	"school" : [
		{
			"sname" : "RGIT",
			"scity" : "Mumbai",
			"Major" : ["IT"],
			"gradyear" : "2010",
			"degree" : "Bachelors",
			"gpa" : "4.0" 
		},
		{	
			"sname" : "TPoly",
			"scity" : "Mumbai",
			"Major" : ["IT"],
			"gradyear" : "2007",
			"degree" : "Diploma",
			"gpa" : "4.0" 
		}
	],
	"onlineCourse" : [
		{
			"title" : "JavaScript Crash Course",
			"school" : "udacity",
			"dates" : "2015",
			"url" : "www.udacity.com"
		},
		{
			"title" : "HTML",
			"school" : "udacity",
			"dates" : "2015",
			"url" : "www.udacity.com"
		},
		{
			"title" : "CSS",
			"school" : "udacity",
			"dates" : "2015",
			"url" : "www.udacity.com"
		}

	]

};


education.display = function()
{
			
	for(thing in education.school){
		var school = education.school[thing];
		var formatedname = HTMLschoolName.replace("%data%", school.sname);
		var formateddegree = HTMLschoolDegree.replace("%data%", school.degree);
		var formateddates = HTMLschoolDates.replace("%data%", school.gradyear);
		var formatedlocation = HTMLschoolLocation.replace("%data%", school.scity);
		var formatedmajors = HTMLschoolMajor.replace("%data%", school.Major);
		var formattedGpa = HTMLschoolGpa.replace("%data%", school.gpa);

		$('#education').append(HTMLschoolStart);
		$('.education-entry:last').append(formatedname + formateddegree);
		$('.education-entry:last').append(formatedlocation);
		$('.education-entry:last').append(formateddates);
		$('.education-entry:last').append(formatedmajors);
		$('.education-entry:last').append(formattedGpa);
		//$('.education-entry:last').children('a').attr("href", school.url);

		
	}

	$('#education').append(HTMLonlineClasses);	

	for(index in education.onlineCourse){
		var onlineCourse = education.onlineCourse[index];
		var formatedtitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
		var formatedschool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
		var formateddates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
		var formatedURL = HTMLonlineURL.replace("%data%", onlineCourse.url);
		
		$('#education').append(HTMLschoolStart);
		$('.education-entry:last').append(formatedtitle + formatedschool);
		$('.education-entry:last').append(formateddates);
		$('.education-entry:last').append(formatedURL);
	}

}


var work = {
	"jobs" : [{
	"employer" : "Probity Soft",
	"title" : "Software developer",
	"dates" : "July 2013 to Feb 2014",
	"location" : "Mumbai, India",
	"Desc" : "Worked as a Technical Developer to develop File Tracking system for our client MHADA, a renowned company in India. MHADA allots houses using lottery system to the applicants. Post allotment the applicants, employees, management and other parties involved has to undergo a lot of processing and maintaining of data. We created a system as per the requirement that handled all of the post allotment work in a very efficient manner. By just logging into the system, one can upload, download, edit and track the information as per the rights assigned to them."
	},
	{
	"employer" : "Capgemini",
	"title" : "Senior Software Engineer",
	"dates" : "Aug 2010 to June 2013",
	"location" : "Mumbai, India",
	"Desc" : "Worked as a Technical Consultant for a US based client. A web based employee portal was designed and developed as per the requirement. Through this portal, employees had all the information in an organized and efficient manner. The product provided useful, relevant and personalized benefits information empowering employees to make benefit- related decisions and track their records easily. "
	}
]
};

	work.display = function() {
		for(job in work.jobs){
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle ;
			$(".work-entry:last").append(formattedEmployerTitle);
			var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);
			var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
			$(".work-entry:last").append(formattedLocation);
			var formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[job].Desc);
			$(".work-entry:last").append(formattedDesc);

		}
	}

	

var projects = {
	"projects": [{
			"title": "Portfolio Site",
			"dates": "Dec 2015",
			"desc": "As a part of Udacity project, Developed a responsive website that displays images, descriptions and links to each portfolio projects using HTML5, CSS and bootstrap framework.",
			"images": []
		}, {
			"title": "Modern Art UI",
			"dates": "Feb 2015",
			"desc": "As a part of Coursera project, Designed and developed a basic Android app that has a very interesting layout. It has different shapes and colors. When the user seek to change the color of those shapes it uses a slide bar. The app has more user option in menu and could navigate through the website of modern art and artists.",
			"images": []
		},
		{
			"title": "Vsec (Voice Security System)",
			"dates": "March 2010",
			"desc": "Designed a Voice security system using the concepts of Biometrics. Sound / speech of speaker was verified to authenticate the user.  Autoregressive model was mainly used to verify the user’s voice in different conditions. The system was developed using MATLAB and MySQL was used for database.",
			"images": []
		}
]
};

projects.display = function() {
	for (project in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);

			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedDates);

			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].desc	);
			$(".project-entry:last").append(formattedProjectDescription);

			if (projects.projects[project].images.length > 0) {
				for(image in projects.projects[project].images ){
					var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedImage);
				}
			}
	}
}

bio.display();
projects.display();
education.display();
work.display();


function inName(name){
	name = myName.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}	

<!-- internationalize name -->

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);