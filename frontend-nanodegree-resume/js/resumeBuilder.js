//pound sign indicates we are looking for an element with id=header
//$("#main").append("Annu Joshi");

var bio = {
    "name": "Annu Joshi",
    "role": "Developer",
    "contacts": {
        "mobile": "9654268259",
        "email": "annuhansa94@gmail.com",
        "github": " https://github.com/AnnuJoshi",
        "twitter": "https://twitter.com/nibblepuff",
        "location": "India"
    },
    "pictureURL": "images/me.jpg ",
    "welcomeMessage": "hiiii",
    "skills": ["awesomeness", "c++", "Java"]
};

var education={
"schools":[
 {
   "name":"Shaheed Rajguru College of Applied Sciences for Women ",
   "city":"Delhi University ",
   "degree":"B.Sc.(H)",
   "dates": "June 2012 - June 2015",
   "major":["CompSci"]
 },
 {
   "name":" Department of Computer Science",
   "city":"Delhi University ",
   "degree":" M.Sc.",
   "dates": "June 2015 - June 2017",
   "major":["CompSci"]

 }
]
};

var work = {
  "jobs": [
    {
      "employer": "IBM",
      "title": "Watson Intern",
      "location": "India",
      "dates": "Feb 2017 - June 2017",
      "description": ""
    },
    {
      "employer": "Cyber Crime Cell",
      "title": "Intern",
      "location": "Gurgaon, India",
      "dates": "June 2014 - July 2015",
      "description": ""
    },
    {
      "employer": "HCL Infosystems",
      "title": "Summer Intern",
      "location": "Noida, India",
      "dates": "June 2013 - July 2014",
      "description": ""
       }
  ]
};


var projects = {
    "projectsDone": [
        {
            "title": "Chat On",
            "date": "July 2016",
            "description": "created a chat bot",
            "images": ["images/fry.jpg "]
        },

        {
            "title": "Chat On",
            "date": "July 2016",
            "description": "created a chat bot",
            "images": ["images/fry.jpg "]
        }


    ]

};

projects.display =function () {
for (project in projects.projectsDone) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data",projects.projectsDone[project].title);
    $(".project-entry:last").append(formattedTitle);


   var formattedDates =HTMLprojectDates.replace("%data", projects.projectsDone[project].date);
    $(".project-entry:last").append(formattedDates);

   var formattedDescription =HTMLprojectDescription.replace("%data", projects.projectsDone[project].description);
    $(".project-entry:last").append(formattedDescription);

       if (projects.projectsDone[project].images.length > 0) {

         for (image in projects.projects[project].images) {
             var formattedImage =HTMLprojectImage.replace("%data", projects.projectsDone[project].images[image]);
             $(".project-entry:last").append(formattedImage);
            }
        }
    }
}

education.display=function (){
  for(school in education.schools){
   $("#education").append(HTMLschoolStart);

   var formattedschoolName=HTMLschoolName.replace("%data%",education.schools[school].name);
   var formattedschoolDegree=HTMLschoolDegree.replace("%data%",education.schools[school].degree);
   var formattedNameDegree=formattedschoolName+formattedschoolDegree;
   $(".education-entry:last").append(formattedNameDegree);


   var formattedDates=HTMLschoolDates.replace("%data%",education.schools[school].dates);
   $(".education-entry:last").append(formattedDates);

   var formattedLocation=HTMLschoolLocation.replace("%data%",education.schools[school].location);
   $(".education-entry:last").append(formattedLocation);

   var formattedMajor=HTMLschoolMajor.replace("%data%",education.schools[school].major);
   $(".education-entry:last").append(formattedMajor);
  }
}



work.display=function(){
  for(job in work.jobs){
   $("#workExperience").append(HTMLworkStart);

   var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
   var formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);

   var formattedEmployerTitle=formattedEmployer+formattedTitle;
   $(".work-entry:last").append(formattedEmployerTitle);

   var formattedDates=HTMLworkDates.replace("%data%",work.jobs[job].dates);
   $(".work-entry:last").append(formattedDates);

   var formattedDescription=HTMLworkDescription.replace("%data%",work.jobs[job].description);
   $(".work-entry:last").append(formattedDescription);
  }

}

bio.display=function displayB(){

var formattedName=HTMLheaderName.replace("%data%",bio.name);
$("#header").append(formattedName);

var formattedRole=HTMLheaderRole.replace("%data%",bio.role);
$("#header").append(formattedRole);

var formattedMobile=HTMLmobile.replace("%data%",bio.contacts.mobile);
$("#header").append(formattedMobile);

var formattedbio=HTMLbioPic.replace("%data%",bio.pictureURL);
$("#header").append(formattedbio);

var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#header").append(formattedWelcomeMsg);

var formattedSkills=HTMLskills.replace("%data%",bio.skills);
$("#header").append(formattedSkills);

}


bio.display();
work.display();
projects.display();
education.display();






