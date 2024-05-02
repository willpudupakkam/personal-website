let bgColor = "#1b294e";
let olColor = "#ff8383";

let aboutSelected = false;
let projectsSelected = false;
let notesSelected = false;

const btn = document.querySelectorAll(".btn");

btn.forEach(button => {
    button.addEventListener("mouseover", () => {
        button.style.color = olColor;
    })
    button.addEventListener("mouseout", () => {
        button.style.color = "white";
    });
});

const homeBtn = document.querySelector("#home");
const aboutBtn = document.querySelector("#about");
const projectsBtn = document.querySelector("#projects");
const notesBtn = document.querySelector("#notes");

const titlePage = document.querySelector("#title-page")
const aboutPage = document.querySelector("#about-page");
const projectsPage = document.querySelector("#projects-page");

homeBtn.addEventListener("click", () => {
    // homeBtn.style.color = "white";
    // homeBtn.style.borderColor = olColor;

    // projectsBtn.style.borderColor = bgColor;
    // notesBtn.style.borderColor = bgColor;
    // aboutBtn.style.borderColor = bgColor;

    titlePage.scrollIntoView();
})

aboutBtn.addEventListener("click", () => {
    // aboutBtn.style.color = "white";
    // aboutBtn.style.borderColor = olColor;
    
    // projectsBtn.style.borderColor = bgColor;
    // notesBtn.style.borderColor = bgColor;
    // homeBtn.style.borderColor = bgColor;
    aboutSelected = true;
    projectsSelected = false;
    notesSelected = false;

    aboutPage.scrollIntoView();
})

projectsBtn.addEventListener("click", () => {
    // projectsBtn.style.color = "white";
    // projectsBtn.style.borderColor = olColor;

    // aboutBtn.style.borderColor = bgColor;
    // notesBtn.style.borderColor = bgColor;
    // homeBtn.style.borderColor = bgColor;

    aboutSelected = false;
    projectsSelected = true;
    notesSelected = false;

    projectsPage.scrollIntoView();
})

notesBtn.addEventListener("click", () => {
    // notesBtn.style.color = "white";
    // notesBtn.style.borderColor = olColor;
    
    // projectsBtn.style.borderColor = bgColor;
    // aboutBtn.style.borderColor = bgColor;
    // homeBtn.style.borderColor = bgColor;

    aboutSelected = false;
    projectsSelected = false;
    notesSelected = true;

})

const bg = document.querySelectorAll(".background");
const outline = document.querySelectorAll(".outline");

const colorBtn = document.querySelectorAll(".color-btn");
// const reef = document.querySelector("#reef");
// const banana = document.querySelector("#banana");
// const jungle = document.querySelector("#jungle");
// const chocolate = document.querySelector("#chocolate");
// const hacker = document.querySelector("#hacker");
// const oreo = document.querySelector("#oreo");

// Colour Palette Functions:

colorBtn.forEach(color => {
    color.addEventListener("click", () => {

        switch(color.id) {
            case "reef":
                olColor = "#ff8383"; 
                bgColor = "#1b294e";
                break;
            case "banana":
                olColor = "#FFFF6B"; 
                bgColor = "#2A133F";
                break;
            case "jungle":
                olColor = "#FA9D00";
                bgColor = "#012B07";
                break;
            case "chocolate":
                olColor = "#63ceff"; 
                bgColor = "#2a1b00";
                break;
            case "hacker":
                olColor = "#2FDA77"; 
                bgColor = "#181818";
                break;
            default:
                olColor = "#FFFFFF";
                bgColor = "#000000";
        }

        btn.forEach(button => {
            button.style.borderColor = bgColor;

            if(aboutSelected) {
                aboutBtn.style.borderColor = olColor;
            } else if(projectsSelected) {
                projectsBtn.style.borderColor = olColor;
            } else if(notesSelected) {
                notesBtn.style.borderColor = olColor;
            }
        })
    
        bg.forEach(backg => {
            backg.style.backgroundColor = bgColor;
        })
    
        outline.forEach(ol => {
            ol.style.borderColor = olColor;
        })
    })
})

// Button Select After Scrolling:

function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        switch (entry.target.id) {
            case "title-page":
                projectsBtn.style.borderColor = bgColor;
                notesBtn.style.borderColor = bgColor;
                aboutBtn.style.borderColor = bgColor;

                aboutSelected = false;
                projectsSelected = false;
                notesSelected = false;

                break;            
            case "about-page":
                aboutBtn.style.color = "white";
                aboutBtn.style.borderColor = olColor;
                
                projectsBtn.style.borderColor = bgColor;
                notesBtn.style.borderColor = bgColor;
                homeBtn.style.borderColor = bgColor;

                aboutSelected = true;
                projectsSelected = false;
                notesSelected = false;

                break;
            case "projects-page":
                projectsBtn.style.color = "white";
                projectsBtn.style.borderColor = olColor;
            
                aboutBtn.style.borderColor = bgColor;
                notesBtn.style.borderColor = bgColor;
                homeBtn.style.borderColor = bgColor;

                aboutSelected = false;
                projectsSelected = true;
                notesSelected = false;
        };
      };
    });
};
  

const observerOptions = {
    root: null,
    threshold: 0.5,
};
  
const observer = new IntersectionObserver(handleIntersection, observerOptions);

observer.observe(titlePage);
observer.observe(aboutPage);
observer.observe(projectsPage);

// document.addEventListener('keydown', function(event) {
//     if (event.key === 'b') { // Replace 'a' with whatever key you want to trigger the sound
//       var audio = document.getElementById('myAudio');
//       audio.currentTime = 0;
//       audio.play();
//     }
//   });