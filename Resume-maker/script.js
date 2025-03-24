
function addEducation() {
    let container = document.getElementById("education-container");
    let div = document.createElement("div");
    div.innerHTML = `
        <input type="text" placeholder="Degree" class="edu-degree">
        <input type="text" placeholder="Institution" class="edu-institution">
        <input type="text" placeholder="Year" class="edu-year">
    `;
    container.appendChild(div);
}

function addExperience() {
    let container = document.getElementById("experience-container");
    let div = document.createElement("div");
    div.innerHTML = `
        <input type="text" placeholder="Job Title" class="exp-title">
        <input type="text" placeholder="Company" class="exp-company">
        <input type="text" placeholder="Years Worked" class="exp-year">
    `;
    container.appendChild(div);
}

function addProject() {
    let container = document.getElementById("projects-container");
    let div = document.createElement("div");
    div.innerHTML = `
        <input type="text" placeholder="Project Name" class="proj-title">
        <input type="text" placeholder="Project Description" class="proj-desc">
    `;
    container.appendChild(div);
}

function generateResume() {
    let fullName = document.getElementById("full-name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let summary = document.getElementById("summary").value;
    let skills = document.getElementById("skills").value.split(",");

    let education = "";
    document.querySelectorAll(".edu-degree").forEach((el, i) => {
        let degree = el.value;
        let institution = document.querySelectorAll(".edu-institution")[i].value;
        let year = document.querySelectorAll(".edu-year")[i].value;
        education += `<p><strong>${degree}</strong> at ${institution}, ${year}</p>`;
    });

    let experience = "";
    document.querySelectorAll(".exp-title").forEach((el, i) => {
        let title = el.value;
        let company = document.querySelectorAll(".exp-company")[i].value;
        let year = document.querySelectorAll(".exp-year")[i].value;
        experience += `<p><strong>${title}</strong> at ${company}, ${year}</p>`;
    });

    let projects = "";
    document.querySelectorAll(".proj-title").forEach((el, i) => {
        let title = el.value;
        let desc = document.querySelectorAll(".proj-desc")[i].value;
        projects += `<p><strong>${title}</strong>: ${desc}</p>`;
    });

    let resumeOutput = `
        <h2>${fullName}</h2>
        <p>Email: ${email} | Phone: ${phone} | Address: ${address}</p>
        <h3>Profile</h3>
        <p>${summary}</p>
        <h3>Education</h3>${education}
        <h3>Experience</h3>${experience}
        <h3>Projects</h3>${projects}
        <h3>Skills</h3><p>${skills.join(", ")}</p>
    `;

    document.getElementById("resume-output").innerHTML = resumeOutput;
    document.getElementById("resume-preview").style.display = "block";
}

function downloadResume() {
    let resume = document.getElementById("resume-output").innerHTML;
    let printWindow = window.open("", "", "width=600,height=600");
    printWindow.document.write(`<html><head><title>Resume</title></head><body>${resume}</body></html>`);
    printWindow.document.close();
    printWindow.print();
}
