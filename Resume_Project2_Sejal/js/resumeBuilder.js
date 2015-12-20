var bio = {
	"name": "Carlos Canas",
	"role": "Interactive Designer",
	"contacts" : {
		"mobile": "415-577-4309",
		"email": "carloscanash@gmail.com",
		"website": "http://theorize.com",
		"github": "http://github.com/losifer",
		"location": "San Francisco, Ca"
	},
	"welcomeMsg" : "Hi There!",
	"skills": [
		"Strategy", "User Experience", "UI & Visual Design", "Development", "Motion Design", "Cooking"
		],
	"bioPic": "https://media.licdn.com/media/p/8/000/223/3ed/32f603a.jpg"
}

var work = {
	"jobs": [
		{
		"employer": "Deluxe distribution",
		"title": "Interactive Design Lead",
		"location": "San Francisco, Ca",
		"dates": "July 2007 - Present",
		"description": "Responsible for all brand projects within the interactive and motion graphic departments."
		},
		{
		"employer": "Young & Rubicam",
		"title": "Interactive Art Director",
		"location": "San Francisco, Ca",
		"dates": "November 2004 - June 2007",
		"description": "Art directed and helped develop all brand projects for Interactive. Clients included 7Up, AMD, Cadence, Chevron, Dr. Pepper, Foster Farms, Hitachi Global, Jacuzzi, NCAA, Palm, and Sunkist"
		},
		{
		"employer": "Walmart.com",
		"title": "Contract UI Designer",
		"location": "Brisbane, Ca",
		"dates": "July 2004 - October 2004",
		"description": "Designed user interface elements according to Walmart styleguides for their photoworks app."
		},
		{
		"employer": "esprit de corps",
		"title": "Interactive Art Director",
		"location": "San Francisco",
		"dates": "August 2001 - May 2002",
		"description": "In charge of design direction for the eCommerce site, promotional minisites, and online advertisements."
		}
	]
}

var projects = {
	"projects":  [
		{
		"title": "Realskateboards.com",
		"dates": "2015",
		"description": "Website for Real Skateboards.",
		"images": [
			"images/pj-rs.jpg",
			"images/pj-rs2.jpg"
			]
		},
		{
		"title": "Deluxe Distribution Catalog",
		"dates": "2014",
		"description": "Responsive Web Catalapp for Deluxe Distribution.",
		"images": [
			"images/pj-dlx-cat.jpg",
			"images/pj-dlx-cat2.jpg"
			]
		},
		{
		"title": "Krooked KC Racers",
		"dates": "2014",
		"description": "Promotional online lookbook for Krooked Skateboards.",
		"images": [
			"images/pj-krkd.jpg",
			"images/pj-krkd2.jpg"
			]
		},
		{
		"title": "Spitfirewheels.com",
		"dates": "2014",
		"description": "Formula Four Wheels promo mini-site.",
		"images": [
			"images/pj-spitfire.jpg",
			"images/pj-spitfire2.jpg"
			]
		}
	]
}

var education = {
	"schools": [
		{
		"name": "Academy of Art",
		"location": "San Francisco",
		"degree": "MFA",
		"major": "Graphic Design",
		"dates": "1998-2000"
		},
		{
		"name": "University of New Orleans",
		"location": "New Orleans",
		"degree": "BA",
		"major": "Psychology",
		"dates": "1992-1996"
		}
	],

	"onlineCourses": [
		{
		"title": "Front-End Web Developer Nanodegree",
		"school": "Udacity",
		"certified": "Certification In Process",
		"dates": "2015",
		"url": "http://udacity.com"
		},
		{
		"title": "Intro to Swift Programming",
		"school": "Udacity",
		"certified": "Certified",
		"dates": "2015",
		"url": "http://udacity.com"
		}
	]
}

// Display Bio

bio.display = function() {

	// Welcome Message
	var welcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg);
	$("#header").prepend(welcomeMsg);

	// Photo
	var bioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").prepend(bioPic);

	// Name and Role
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);

	// Contact Info
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedWebSite = HTMLblog.replace("%data%", bio.contacts.website);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	// Contact Info Header
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedWebSite);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedLocation);

	// Contact Info Footer
	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedWebSite);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedLocation);

	// Display Skills

	$("#header").append(HTMLskillsStart);

	for (skill in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkill);
	}
}

bio.display();

// Display Work
work.display = function() {

	for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedWorkDates);

	var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedWorkDescription);

	}

}

work.display();

// Display Projects
projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

projects.display();

// Display Education
education.display = function() {

	for (school in education.schools) {
	$("#education").append(HTMLschoolStart);

	var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
	var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
	var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
	$(".education-entry:last").append(formattedSchoolNameDegree);

	var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
	$(".education-entry:last").append(formattedSchoolDates);

	var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
	$(".education-entry:last").append(formattedSchoolLocation);

	var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
	$(".education-entry:last").append(formattedSchoolMajor);

	}

	// Online Education

	$("#education").append(HTMLonlineClasses);

	for (online in education.onlineCourses) {
	$("#education").append(HTMLschoolStart);

	var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
	var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
	var formattedTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
	$(".education-entry:last").append(formattedTitleSchool);

	var formattedCertified = HTMLcertified.replace("%data%", education.onlineCourses[online].certified);
	$(".education-entry:last").append(formattedCertified);

	var formattedOnlineSchoolDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
	$(".education-entry:last").append(formattedOnlineSchoolDates);

	var formattedOnlineSchoolUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
	$(".education-entry:last").append(formattedOnlineSchoolUrl);
	}
}

education.display();

// Display International Name Change
function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] +" "+ name[1];
}

// Display International Button
$("footer").append(internationalizeButton);

// Display Google Maps
$("#mapDiv").append(googleMap);

// Log Clicks
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});
