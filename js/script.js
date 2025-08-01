// for phone number input
document.getElementById("phone").addEventListener("input", function () {
  this.value = this.value.replace(/\D/g, "").slice(0, 10);
});

// "project","extra-section","work-exp","skill","add-detail"
// for career objective add and remove buttons

function addCareer() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control", "mt-3" ,"career-obj");
  newNode.placeholder = "Enter your career objective";


  let careerObjOb = document.getElementById("addCareerObj");
  let addCareerBtnObj = document.getElementById("addCareerBtn");

  careerObjOb.insertBefore(newNode, addCareerBtnObj);
}

function removeCareer() {
  let careerObjs = document.getElementsByClassName("career-obj");
  if (careerObjs.length > 1) {
    careerObjs[careerObjs.length - 1].remove();
  }
}

function addEducation() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control", "mt-3","edu-section");
  newNode.placeholder = "Enter your education details";

  let educationDetailsOb = document.getElementById("educationDetails");
  let addEducationBtnObj = document.getElementById("addEducationBtn");

  educationDetailsOb.insertBefore(newNode, addEducationBtnObj);
}

function removeEducation() {
  let educationObjs = document.getElementsByClassName("edu-section");
  if (educationObjs.length > 1) {
    educationObjs[educationObjs.length - 1].remove();
  }
}

// for projects add and remove buttons
function addProjects() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control", "mt-3" ,"project");
  newNode.placeholder = "Enter your project details";


  let projectDetailsOb = document.getElementById("projectDetails");
  let addProjectsBtnObj = document.getElementById("addProjectsBtn");

  projectDetailsOb.insertBefore(newNode, addProjectsBtnObj);
}

function removeProjects() {
  let projectObjs = document.getElementsByClassName("project");
  if (projectObjs.length > 1) {
    projectObjs[projectObjs.length - 1].remove();
  }
}

// for extra curricular activities add and remove buttons
function addExtraCurricular() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control", "mt-3","extra-section");
  newNode.placeholder = "Enter your extra curricular activities";


  let extraCurricularOb = document.getElementById("extraCActivies");
  let addExtraCurricularBtnObj = document.getElementById("addECbtn");

  extraCurricularOb.insertBefore(newNode, addExtraCurricularBtnObj);
}
function removeExtraCurricular() {
  let extraObjs = document.getElementsByClassName("extra-section");
  if (extraObjs.length > 1) {
    extraObjs[extraObjs.length - 1].remove();
  }
}

// for work experience add and remove buttons

function addWorkExperience() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control", "mt-3","work-exp");
  newNode.placeholder = "Enter your work experience";


  let workExperienceOb = document.getElementById("we");
  let addWorkExpBtnObj = document.getElementById("addWorkExpBtn");

  workExperienceOb.insertBefore(newNode, addWorkExpBtnObj);
}

function removeWorkExperience() {
  let workExpObjs = document.getElementsByClassName("work-exp");
  if (workExpObjs.length > 1) {
    workExpObjs[workExpObjs.length - 1].remove();
  }
}

// for skills add and remove buttons
function addSkills() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control", "mt-3","skill");
  newNode.placeholder = "Enter your skills";


  let skillsOb = document.getElementById("skillsDetails");
  let addSkillsBtnObj = document.getElementById("addSkillsBtn");

  skillsOb.insertBefore(newNode, addSkillsBtnObj);
}

function removeSkills() {
  let skillObjs = document.getElementsByClassName("skill");
  if (skillObjs.length > 1) {
    skillObjs[skillObjs.length - 1].remove();
  }
}

// for additional details add and remove buttons

function addADetails() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control", "mt-3","add-detail");
  newNode.placeholder = "Enter your additional details";


  let AdditionalDetailsOb = document.getElementById("AdditionalDetails");
  let addADbtnObj = document.getElementById("addADbtn");

  AdditionalDetailsOb.insertBefore(newNode, addADbtnObj);
}

function removeADetails() {
  let addDetailObjs = document.getElementsByClassName("add-detail");
  if (addDetailObjs.length > 1) {
    addDetailObjs[addDetailObjs.length - 1].remove();
  }
}


// generate resume Function

function generateResume(){
  let name = document.getElementById("name").value;
  let nameT = document.getElementById("nameT");
  nameT.innerHTML = name;


  document.getElementById("emailT").innerHTML = document.getElementById("email").value;
  document.getElementById("phoneT").innerHTML = document.getElementById("phone").value;
  document.getElementById("addressT").innerHTML = document.getElementById("address").value; 
  document.getElementById("portfolioT").innerHTML = document.getElementById("portfolio").value;



  let careerObj = document.getElementsByClassName("career-obj");
  let str = "";
  for (let e of careerObj) {
    if (e.value.trim() !== "") {
      str += `<li>${e.value}</li>`;
    }
  }
  document.getElementById("careerT").innerHTML = str;

  let educationDetails = document.getElementsByClassName("edu-section");
  str = "";
  for (let e of educationDetails) {
    if (e.value.trim() !== "") {
      str += `<li>${e.value}</li>`;
    }
  }
  document.getElementById("eduT").innerHTML = str;

  let projectDetails = document.getElementsByClassName("project");
  str = "";
  for (let e of projectDetails) {
    if (e.value.trim() !== "") {
      str += `<li>${e.value}</li>`;
    }
  }
  document.getElementById("projectsT").innerHTML = str;

  let extraDetails = document.getElementsByClassName("extra-section");
  str = "";
  for (let e of extraDetails) {
    if (e.value.trim() !== "") {
      str += `<li>${e.value}</li>`;
    }
  }
  document.getElementById("extra-curricularT").innerHTML = str;

  let workExpDetails = document.getElementsByClassName("work-exp");
  str = "";
  for (let e of workExpDetails) {
    if (e.value.trim() !== "") {
      str += `<li>${e.value}</li>`;
    }
  }
  document.getElementById("work-expT").innerHTML = str;

  let skillDetails = document.getElementsByClassName("skill");
  str = "";
  for (let e of skillDetails) {
    if (e.value.trim() !== "") {
      str += `<li>${e.value}</li>`;
    }
  }
  document.getElementById("skillsT").innerHTML = str;

  let addDetailDetails = document.getElementsByClassName("add-detail");
  str = "";
  for (let e of addDetailDetails) {
    if (e.value.trim() !== "") {
      str += `<li>${e.value}</li>`;
    }
  }
  document.getElementById("additional-detailsT").innerHTML = str;


  document.getElementById("resume-form").style.display = "none";
  document.getElementById("resume-template").style.display = "block";

}


function printResume() {
  window.print();
  }