function showContactPopup() {
    alert("Contact Information:\nName: Basavanna C D\nPhone: +61 423519844\nEmail: basavannatej@gmail.com");
}

function toggleProjectDetails(projectId) {
    var project = document.getElementById(projectId);
    if (project.style.display === "none" || project.style.display === "") {
        project.style.display = "block";
    } else {
        project.style.display = "none";
    }
}
