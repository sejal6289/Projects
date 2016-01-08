
var formattedName, formattedRole;
var myName ="Sejal Shah";
var myRole="Web developer";

var bio = {
	"name" : myName,
	"role" : myRole,
	"contacts" : [{
		"mobile" : "971-777-9701",
		"email" : "sejal6289@gmail.com",
		"linkedin" : "sejal6289",
		"github" : "sejal6289",
		"location" : "Hillsboro, Oregon"
	}],
	"welcomemessage" : "<br>I have positive attitude, creativity and a hands-on approach to design and implementation. With fundamental values of client satisfaction, quality and teamwork, I maintain a constant vision of innovation to remain on the cutting edge of design technology.",
	"skills" : ["HTML/HTML5","CSS/Bootstrap", "JavaScript(Jquery)", "Java", "C++", "C", "PL/SQL", "Android development"],
	"biopic" : "images/me.jpg",
	"pdf" : "images/pdf.gif",
	"doc" : "images/doc.gif",
	"pdfResume" : "downloads/Sejal_resume.pdf",
	"docResume" : "downloads/Sejal_resume.doc"
}


bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedImage = HTMLbioPic.replace("%data%",bio.biopic);
	var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomemessage);
	var formattedPdf = HTMLresumePdf.replace("%data%",bio.pdf);
	var formattedDoc = HTMLresumeDoc.replace("%data%",bio.doc);
	var formattedDownload = formattedPdf + formattedDoc;

	$("#download").append(formattedDownload).prepend(HTMLresumeDownload);
	$('#pdf').attr("href", bio.pdfResume);
	$('#doc').attr("href", bio.docResume);
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
			"sname" : "Rajiv Gandhi Institute of Technology, University of Mumbai",
			"scity" : "Mumbai, India",
			"Major" : ["Information Technology"],
			"gradyear" : "2007-2010",
			"degree" : "Bachelors Of Engineering",
			"gpa" : "3.6" 
		},
		{	
			"sname" : "Thakur Polytechnic, Maharashtra State Board of Technical Education",
			"scity" : "Mumbai, India",
			"Major" : ["Information Technology"],
			"gradyear" : "2004-2007",
			"degree" : "Diploma",
			"gpa" : "3.75" 
		}
	],
	"onlineCourse" : [
		{
			"title" : "Front-End Web Developer Nanodegree",
			"schoolurl" : "https://www.udacity.com/",
			"school" : "Udacity",
			"dates" : "Certification In Progress",
			"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
			"info" : "Click for more information"
		},
		{
			"title" : " HTML, CSS & JavaScript",
			"schoolurl" : "https://www.coursera.org/",
			"school" : "Coursera",
			"dates" : "Certified - November, 2015",
			"url" : "https://www.coursera.org/account/accomplishments/certificate/TGLRTQB2EAYP",
			"info" : "View Certificate"
		},
		{
			"title" : "Programming Mobile Applications for Android Handheld Systems",
			"schoolurl" : "https://www.coursera.org/",
			"school" : "Coursera",
			"dates" : "Certified - February, 2015",
			"url" : "https://www.coursera.org/account/accomplishments/records/Tsj6EeQD5NLk2KYY",
			"info" : "View Certificate"
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
		$('.education-entry:last').append(formateddegree);
		$('.education-entry:last').append(formattedGpa);
		$('.education-entry:last').append(formatedname);
		$('.education-entry:last').append(formateddates); 
		$('.education-entry:last').append(formatedlocation);		
		$('.education-entry:last').append(formatedmajors);
		//$('.education-entry:last').children('a').attr("href", school.url);

		
	}

	$('#education').append(HTMLonlineClasses);	

	for(index in education.onlineCourse){
		var onlineCourse = education.onlineCourse[index];
		var formatedtitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
		var formatedschool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
		var formateddates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
		var formatedURL = HTMLonlineURL.replace("%data%", onlineCourse.url);
		var formatedURL2 = HTMLonlineURL2.replace("%data%", onlineCourse.info);
		
		$('#education').append(HTMLschoolStart);
		$('.education-entry:last').append(formatedtitle + formatedschool);
		$('.education-entry:last').append(formateddates);
		$('.education-entry:last').append(formatedURL + formatedURL2);
	}

}


var work = {
	"jobs" : [{
	"employer" : "Probity Soft",
	"title" : "Software developer",
	"dates" : "July 2013 to February 2014",
	"location" : "Mumbai, India",
	"Desc" : "Designed an online tracking systems for a construction company which was appreciated by employees, costumer and other 3rd party users. Collaborated with design engineers and testers for the best results. Responsible for creation of brand identity, web site header, menu, information containers, grid styles, navigation, forms, User components and application widgets with suitable color schemes."
	},
	{
	"employer" : "Capgemini India",
	"title" : "Senior Software Engineer",
	"dates" : "August 2010 to June 2013",
	"location" : "Mumbai, India",
	"Desc" : "Designed a HRMS portal that provided useful, relevant and personalized benefit information empowering employees to make benefit- related decisions and track their records easily.Worked with development, business, Testing team and relevant user groups to execute, analyze, communicate & update about the project.Successfully executed the entire test cases and fixed any bugs/issues identified during the test cycles."
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
			"desc": "Built a responsive website that displays images, descriptions and links to each portfolio projects using HTML5, CSS and bootstrap framework. Created modals to provide detailed description of each project.",
			"images": []
		}, {
			"title": "Modern Art UI",
			"dates": "Feb 2015",
			"desc": "Developed android app with an interesting layout containing different shapes whose color can be changed using the slide bar included. Built a menu for users to navigate through more options and reach website of modern art and artists.",
			"images": []
		},
		{
			"title": "Vsec (Voice Security System)",
			"dates": "March 2010",
			"desc": "Developed a Voice security system that uses voice of user for verification using MATLAB and MySQL. Designed using concepts of Biometrics and Autoregressive model that uses user’s voice for verification in various conditions.",
			"images": []
		},
		{
			"title": "Object Diagram Modeler",
			"dates": "March 2007",
			"desc": "Designed a real time System that helps user to understand system structure and requirement at initial stage of Software Development. It accepts the input from the user on a general basis and generates the Object diagram depicting essential details. This was developed using VB 6.0 and MySQL was used for database.",
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

//$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);