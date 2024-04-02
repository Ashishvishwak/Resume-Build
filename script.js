// About section 
function AboutSelection(){
document.getElementById("submit1").addEventListener("click", function () {
  // User input data
  let Iname = document.querySelector("#Fname").value;
  let IMname = document.querySelector("#Mname").value;
  let ILname = document.querySelector("#Lname").value;
  let Iphoto = document.querySelector("#photo").value;
  let Iaddress = document.querySelector("#address").value;
  let Iemail = document.querySelector("#email").value;
  let Ipno = document.querySelector("#pno").value;
  let Isummary = document.querySelector("#summary").value;

  //Resume data
  let Tname = document.querySelector("#Tname");
  let TMname = document.querySelector("#TMname");
  let TLname = document.querySelector("#TLname");
  let Tphoto = document.querySelector("#Tphoto");
  let Taddress = document.querySelector("#Taddress");
  let Temail = document.querySelector("#Temail");
  let Tpno = document.querySelector("#Tpno");
  let Tsummary = document.querySelector("#Tsummary");

  // Entering data in resume
  Tname.innerHTML = Iname;
  TMname.innerHTML = IMname;
  TLname.innerHTML = ILname;
  Tphoto.innerHTML = Iphoto;
  Taddress.innerHTML = Iaddress;
  Temail.innerHTML = Iemail;
  Tpno.innerHTML = Ipno;
  Tsummary.innerHTML = Isummary;
  // upload img
  let file = document.querySelector("#photo").files[0];

  if (file) {  // Check if a file is selected
    let reader = new FileReader();

    reader.onload = function (event) {
      document.querySelector("#Tphoto").src = event.target.result;
    };

    reader.readAsDataURL(file);
  } 

});
}
// skill section 
function addSkills() {
  let skillsContainer = document.querySelector(".SKILLS");
  let addBtn = document.querySelector(".add");
  let removeBtn = document.querySelector(".remove");

  addBtn.addEventListener("click", function () {
    let userSkillsInput = document.querySelector("#Iskills");
    let userSkills = userSkillsInput.value.split(","); // Assuming comma-separated skills

    for (let skill of userSkills) {
      let label = document.createElement("label");
      let input = document.createElement("input");
      let removeIcon = document.createElement("i");

      label.classList.add("label");
      input.classList.add("input");
      removeIcon.classList.add("remove-icon");
      removeIcon.classList.add("ri-close-line");
      removeIcon.classList.add("text-black");

      label.textContent = "Skills";
      input.type = "text";
      input.value = skill.trim(); // Pre-populate input with the entered skill

      // Create a wrapper element for better organization (optional)
      let skillElement = document.createElement("div");
      skillElement.classList.add("skill");
      skillElement.appendChild(label);
      skillElement.appendChild(input);
      skillElement.appendChild(removeIcon);

      skillsContainer.appendChild(skillElement);

      // Add event listener to the remove icon
      removeIcon.addEventListener("click", function () {
        skillElement.remove();
      });
    }

    // Clear the user input field after adding skills
    userSkillsInput.value = "";
  });

  // Existing submit button functionality (modify based on your logic)
  document.getElementById("submit6").addEventListener("click", function () {
    let newSkillsStr = "";

    // Retrieve values from all skill inputs, including newly added ones:
    let skillInputs = document.querySelectorAll(".input");
    for (let skillInput of skillInputs) {
      newSkillsStr += `<li>${skillInput.value.trim()}</li>`; // Include input value directly
    }

    // Get the existing resume skills (if any)
    let resumeSkills = document.querySelector("#Tskills").innerHTML;

    // Combine existing and new skills
    let updatedSkills = "";
    if (resumeSkills) {
      updatedSkills = resumeSkills + newSkillsStr;
    } else {
      updatedSkills = newSkillsStr;
    }

    // Update the resume skills section
    document.querySelector("#Tskills").innerHTML = updatedSkills;
  });
}
// skill section submit button
function submit6(){


var submit5 = document.getElementById("submit6")
submit5.addEventListener("click", function () {
  let newSkillsStr = "";

  // Retrieve values from all skill inputs, including newly added ones:
  let skillInputs = document.querySelectorAll(".input");
  for (let skillInput of skillInputs) {
    newSkillsStr += `<li>${skillInput.value.trim()}</li>`; // Include input value directly
  }


});
}
// AcievementSelection
function AcievementSelection(){
document.getElementById("submit2").addEventListener("click", function () {
  // User input data
  let IAtitle = document.querySelector("#Atitle").value;
  let IADes = document.querySelector("#ADes").value;
  

  //Resume data
  let TAtitle = document.querySelector("#TAtitle");
  let TADes = document.querySelector("#TADes");
  

  // Entering data in resume
  TAtitle.innerHTML = IAtitle;
  TADes.innerHTML = IADes;

});
}
// Experience section
function ExperienceSelection(){
  document.getElementById("submit3").addEventListener("click", function () {
    // User input data
    let IEtitle = document.querySelector("#Etitle").value;
    let IEcompany = document.querySelector("#Ecompany").value;
    let IEsdate = document.querySelector("#Esdate").value;
    let IEddate = document.querySelector("#Eddate").value;
    let IExpdes = document.querySelector("#Expdes").value;
    
  
    //Resume data
    let TEtitle = document.querySelector("#TEtitle");
    let TEcompany = document.querySelector("#TEcompany");
    let TEsdate = document.querySelector("#TEsdate");
    let TEddate = document.querySelector("#TEddate");
    let TExpdes = document.querySelector("#TExpdes");
    
  
    // Entering data in resume
    TEtitle.innerHTML = IEtitle;
    TEcompany.innerHTML = IEcompany;
    TEsdate.innerHTML = IEsdate;
    TEddate.innerHTML = IEddate;
    TExpdes.innerHTML = IExpdes;
  
  });
  }
// Education section
function EducationSelection(){
  document.getElementById("submit4").addEventListener("click", function () {
    // User input data
    let ISchool = document.querySelector("#School").value;
    let IDegree = document.querySelector("#Degree").value;
    let ICity = document.querySelector("#City").value;
    let IEdusdate = document.querySelector("#Edusdate").value;
    let IEduedate = document.querySelector("#Eduedate").value;
    let IEdes = document.querySelector("#Edes").value;
    
  
    //Resume data
    let TSchool = document.querySelector("#TSchool");
    let TDegree = document.querySelector("#TDegree");
    let TCity = document.querySelector("#TCity");
    let TEdusdate = document.querySelector("#TEdusdate");
    let TEduedate = document.querySelector("#TEduedate");
    let TEdes = document.querySelector("#TEdes");
    
  
    // Entering data in resume
    TSchool.innerHTML = ISchool;
    TDegree.innerHTML = IDegree;
    TCity.innerHTML = ICity;
    TEdusdate.innerHTML = IEdusdate;
    TEduedate.innerHTML = IEduedate;
    TEdes.innerHTML = IEdes;
  
  });
  }
// PROJECTS section
function ProjectSelection(){
  document.getElementById("submit5").addEventListener("click", function () {
    // User input data
    let Ipname = document.querySelector("#pname").value;
    let Iplink = document.querySelector("#plink").value;
    let Ipdes = document.querySelector("#pdes").value;
    
  
    //Resume data
    let Tpname = document.querySelector("#Tpname");
    let Tplink = document.querySelector("#Tplink");
    let Tpdes = document.querySelector("#Tpdes");
   
    
  
    // Entering data in resume
    Tpname.innerHTML = Ipname;
    Tplink.innerHTML = Iplink;
    Tpdes.innerHTML = Ipdes;
  
  
  });
  }
 


window.onload = function () {
  document.getElementById("download")
      .addEventListener("click", () => {
          const invoice = this.document.getElementById("invoice");
          console.log(invoice);
          console.log(window);
          
          var opt = {
              margin: 0.1,
              filename: `MyResume-SwfitBuilder.pdf`,
              image: { type: 'jpeg', quality: 100 },
              html2canvas: { scale: 2 },
              jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
          };
          html2pdf().from(invoice).set(opt).save();
      })
}
AboutSelection()
addSkills();
submit6()
AcievementSelection()
ExperienceSelection()
EducationSelection()
ProjectSelection()
