/** Function for mode changing, default - Light Mode 
 * The function doesn't retain settings when switching between pages.*/
/*
let isDarkMode = false;

function changeMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
    
    let button = document.getElementById("btn");
    button.classList.toggle("btn-dark-mode");

    let heading = document.getElementsByClassName("heading");
    for (i = 0; i < heading.length; i++) 
    heading[i].classList.toggle("heading-dark-mode")

    let links = document.getElementsByTagName("a");
    for (j = 0; j < links.length; j++) {
        links[j].classList.toggle("a-dark-mode");    
    }

    isDarkMode = !isDarkMode; 
    button.textContent = isDarkMode ? "Light mode" : "Dark mode";
    
    //This is the same function without shorthand
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
        button.textContent = "Light Mode";
        } else {
            button.textContent = "Dark mode";
        } 


    console.log("dark-mode class assigned to document.body:", element.classList.contains("dark-mode"));
}
*/


/** Update function for mode changing, default - Light Mode */
// Check if the dark mode preference is stored in Local Storage
let isDarkMode = localStorage.getItem("darkMode") === "true";

function changeMode() {
    isDarkMode = !isDarkMode;
    localStorage.setItem("darkMode", isDarkMode);

    let element = document.body;
    element.classList.toggle("dark-mode");
    
    let button = document.getElementById("btn");
    button.classList.toggle("btn-dark-mode");

    let heading = document.getElementsByClassName("heading");
    for (i = 0; i < heading.length; i++) 
    heading[i].classList.toggle("heading-dark-mode")

    let links = document.getElementsByTagName("a");
    for (j = 0; j < links.length; j++) {
        links[j].classList.toggle("a-dark-mode");    
    }
    // Update the button text based on the current mode.
    if (isDarkMode) {
        button.textContent = "Light Mode";
      } else {
        button.textContent = "Dark Mode";
      }

    // Log whether the "dark-mode" class is assigned to the <body> element.
    console.log("dark-mode class assigned to document.body:", isDarkMode);
}

// Load the mode preference when the page loads
if (isDarkMode) {
    // Set the appropriate visual mode
    document.body.classList.add("dark-mode");
    let button = document.getElementById("btn");
    button.classList.add("btn-dark-mode");

    let heading = document.getElementsByClassName("heading");
    for (i = 0; i < heading.length; i++) 
    heading[i].classList.add("heading-dark-mode");

    let links = document.getElementsByTagName("a");
    for (j = 0; j < links.length; j++) {
        links[j].classList.add("a-dark-mode");    
    }

    // Update the button text
    button.textContent = "Light mode";
}


/** Function for generating skill level circles */

function generateSkillLevelCircles() {
    let skillLevels = document.getElementsByClassName('skill-level');
    
    for (let i = 0; i < skillLevels.length; i++) {
        let skillLevel = skillLevels[i];
        let skillLevelValue = skillLevel.getAttribute('level');
        skillLevel.innerHTML = "";

        for (let j = 0; j < 5; j++) {
            let circle = document.createElement("div");
            circle.className = "level-circle";
            
            
          /*  if (isDarkMode) {
                circle.classList.add("level-circle-dark-mode");
            } */
            
            
            if (j < skillLevelValue) {
                circle.classList.add("filled");
            }

            skillLevel.appendChild(circle);

            
        }
    }
}

generateSkillLevelCircles();

/** RWD dropdown menu function */
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

let isMenuOpen = false;

function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    navigation.classList.toggle("active", isMenuOpen);

    if (isMenuOpen) {
        function closeMenu() {
            isMenuOpen = false;
            navigation.classList.remove("active");
        }
        
        navigation.addEventListener("mouseleave", closeMenu);
}
}
menuToggle.addEventListener("click", toggleMenu);


/*
function generateSkillLevelCircles() {
    let skillLevels = document.getElementsByClassName('skill-level');
    
    for (let i = 0; i < skillLevels.length; i++) {
        let skillLevel = skillLevels[i];
        let skillLevelValue = skillLevel.getAttribute('level');
        skillLevel.innerHTML = "";

        for (let j = 0; j < 5; j++) {
            let circle = document.createElement("div");
            circle.className = "level-circle";
            
            
            
            if (j < skillLevelValue) {
                circle.classList.add("filled");
            }

            skillLevel.appendChild(circle);

            
        }
    }
}

generateSkillLevelCircles();
/*
function darkMode() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.body.style.backgroundImage = "none";
    document.getElementById("href").style.color = "#baf";
}
*/

/*
function lightMode() {
    document.body.style.backgroundColor = default;
    document.body.style.color = default;
    document.body.style.backgroundImage = default;
    document.getElementByClass("a").style.color = default;
}*/