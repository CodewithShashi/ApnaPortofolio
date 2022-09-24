let allProjects = document.querySelectorAll(".project");
let allBgHovers = document.querySelectorAll(".bg-hover");
let techStackIcon = document.querySelector(".tech-stack-icon");
let allTechStackCont = document.querySelectorAll(".tech-stack-cont");

for (let i = 0; i < allProjects.length; i++) {
    allProjects[i].addEventListener("mouseenter", e => {
        if (!allBgHovers[i].classList.contains("bg-animation-in")) allBgHovers[i].classList.add("bg-animation-in");
        if (allBgHovers[i].classList.contains("bg-animation-out")) allBgHovers[i].classList.remove("bg-animation-out");
    })
    allProjects[i].addEventListener("mouseleave", e => {
        if (allBgHovers[i].classList.contains("bg-animation-in")) allBgHovers[i].classList.remove("bg-animation-in");
        if (!allBgHovers[i].classList.contains("bg-animation-out")) allBgHovers[i].classList.add("bg-animation-out");
    })
}
for (let i = 0; i < allTechStackCont.length; i++) {
    let icons = allTechStackCont[i].querySelectorAll(".icon");
    allTechStackCont[i].addEventListener("mouseenter", e => {
        icons.forEach(icon => {
            if (icon.classList.contains("icon-pop-in")) icon.classList.remove("icon-pop-in");
            if (!icon.classList.contains("icon-pop-out")) icon.classList.add("icon-pop-out");
        })
        if (allTechStackCont[i].classList.contains("icon-list-pop-in")) allTechStackCont[i].classList.remove("icon-list-pop-in");
        if (!allTechStackCont[i].classList.contains("icon-list-pop-out")) allTechStackCont[i].classList.add("icon-list-pop-out");
    })
    allTechStackCont[i].addEventListener("mouseleave", e => {
        icons.forEach(icon => {
            if (!icon.classList.contains("icon-pop-in")) icon.classList.add("icon-pop-in");
            if (icon.classList.contains("icon-pop-out")) icon.classList.remove("icon-pop-out");
        })
        if (!allTechStackCont[i].classList.contains("icon-list-pop-in")) allTechStackCont[i].classList.add("icon-list-pop-in");
        if (allTechStackCont[i].classList.contains("icon-list-pop-out")) allTechStackCont[i].classList.remove("icon-list-pop-out");
    })
}

let gitProjectLinks = ["https://github.com/SHASHI0202/Codersmasher.com", "https://github.com/SHASHI0202", "https://github.com/SHASHI0202/MyCafeapp", "https://github.com/SHASHI0202/Spotify-Clone", "https://github.com/SHASHI0202/Online-Food-Delivery-Website", "https://arun496.github.io/excel_pep_yt/"];
let liveProjectLinks = ["https://codechat-8f439.web.app/", "https://login-auth-b8e4e.web.app/", "https://arun496.github.io/pepcam/", "https://my-pepboard.herokuapp.com/", "https://arun496.github.io/TreeHouse/", "https://arun496.github.io/excel_pep_yt/", "https://arun496.github.io/todostack/"];
let allContactLinks = ["https://github.com/SHASHI0202", "https://www.linkedin.com/in/shashishekharpandey/", "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=shashishekharp41@gmail.com", "https://drive.google.com/file/d/1KzMPGB8sfSanaJfa9MaVNCrEBo3f0j8T/view?usp=sharing"];

let allGitIcons = document.querySelectorAll(".git-icon");
let allLiveIcons = document.querySelectorAll(".live-icon");
let allContactIcons = document.querySelectorAll(".contact-icon");

allGitIcons.forEach((ele, idx) => {
    ele.addEventListener("click", e => {
        let a = document.createElement("a");
        a.href = gitProjectLinks[idx];
        a.target = "_blank";
        a.click();
        a.remove();
    })
})

allLiveIcons.forEach((ele, idx) => {
    ele.addEventListener("click", e => {
        let a = document.createElement("a");
        a.href = liveProjectLinks[idx];
        a.target = "_blank";
        a.click();
        a.remove();
    })
})

allContactIcons.forEach((ele, idx) => {
    ele.addEventListener("click", e => {
        let a = document.createElement("a");
        a.href = allContactLinks[idx];
        a.target = "_blank";
        a.click();
        a.remove();
    })
})