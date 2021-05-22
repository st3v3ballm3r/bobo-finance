// Navigation Bar SECTION
const navBar = {
  show: false,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#03045e, #023e8a, #0077b6, #0096c7, #00b4d8, #48cae4",
  firstName: "Bobo",
  middleName: "",
  lastName: "Finance",
  message: " Bobo wants to join his frens on the moon. Every other fucker’s gone there, so why can’t he..? ",
  icons: [
    {
      image: "fa-telegram",
      url: "https://t.me/b0b0finance"
    },
    {
      image: "fa-github-alt",
      url: "https://github.com/st3v3ballm3r",
    },
    {
      image: "fa-medium",
      url: "https://medium.com/@bobo_finance",
    },
    {
      image: "fa-bitcoin",
      url: "https://bscscan.com/address/0x5a5762fafd3867d1c7d6bb847693533d853b4869#code",
    },
    {
      image: "fa-cc-amex",
      url: "https://dxsale.app/app/pages/defipresale?saleID=1847&chain=BSC",
    },
  
    ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About",
  imageLink: require("../editable-stuff/bocl.jpg"),
  imageSize: 375,
  message:
    "Bobo Finance is here to give back to the so many he has taken away from. There might be a bear market coming, but Bobo wants to go to the moon, and he wants to take you with him on this trip.",
  paper: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Recent Projects",
  gitHubUsername: "", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Tokenomics",
  message:
    "Bobo Finance is a clone of safemoon with small modifications.Every trade contributes towards generating liquidity, and holders earn rewards through static reflection.-Total Supply 1 quadrillion.-Burned 0x...dead: 570 Trillion. -Marketing/Prizes: 30 Trillion. -Dev/team: 20 Trillion. -Pre-sale: 480 Trillion -Initial liquidity: 80% of presale.",
  images: [
    { 
      img: require("../editable-stuff/bohp.jpg"), 
      label: "Community Driven", 
      paragraph: "Bobo and Stev3 burned 570 trillion tokens prior to launching, and will burn more if certain milestones are met. Onwership renounced when liquidity added. Liquidity locked 1 year" 
    },
    { 
      img: require("../editable-stuff/bowo.jpg"), 
      label: "Always shrinking supply", 
      paragraph: "0x...dead will always recieve rewards, hence always taking tokens out of supply." 
    },
    { 
      img: require("../editable-stuff/bomat.png"), 
      label: "Safety", 
      paragraph: "Feel comfortable knowing after launch it will be a community driven token. Ownership renounced & LPs locked" 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: false,
  heading: "Skills",
  hardSkills: [
    { name: "Computer Networking", value: 90 },
    { name: "IT Support", value: 75 },
    { name: "Help Desk", value: 85 },
    { name: "Web/Block-Chain Development", value: 65 },
    { name: "Data Security", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "Troubleshooting", value: 80 },
    { name: "Cloud Computing", value: 75 },
    { name: "System Administration", value: 80 },
    { name: "Security Configuration", value: 70 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
    { name: "Troubleshooting", value: 80 },
    { name: "Decision Making", value: 80 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "If you have any questions, or if you just want to say hi, please feel free to email us at",
  email: "team@b0b0.finance",
};

const experiences = {
  show: true,
  heading: "Team/Community",
  data: [
    {
      role: 'Bobo',// Here Add Company Name
      companylogo: require('../assets/img/bochart.png'),
      date: 'May 2021- Founder/Visionary',
    },
    {
      role: 'Stev3 Ballm3r',
      companylogo: require('../assets/img/sb.jpg'),
      date: 'May 2021- Code Monkey/Official Greasy Pitchman',
    },
    
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
