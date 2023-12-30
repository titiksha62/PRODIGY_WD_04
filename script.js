function toggleProjects() {
    var projectGrid = document.getElementById("projectGrid");
    if (projectGrid.style.display === "none" || projectGrid.style.display === "") {
        projectGrid.style.display = "grid";
    } else {
        projectGrid.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var projectGrid = document.getElementById("projectGrid");
    projectGrid.style.display = "none";
});
