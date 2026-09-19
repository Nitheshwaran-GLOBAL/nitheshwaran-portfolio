
function openProject(title, src, description) {
  document.getElementById("modal-img").src = src;
  document.getElementById("modal-img").alt = title;
  document.getElementById("modal-title").textContent = title;
  document.getElementById("modal-description").textContent = description;
  document.getElementById("modal").classList.add("show");
}

function openResume() {
  document.getElementById("modal-img").src = "assets/resume.jpg";
  document.getElementById("modal-img").alt = "Nitheshwaran S Resume";
  document.getElementById("modal-title").textContent = "Nitheshwaran S — Resume";
  document.getElementById("modal-description").textContent =
    "Embedded resume preview.";
  document.getElementById("modal").classList.add("show");
}

function closeModal() {
  document.getElementById("modal").classList.remove("show");
}

document.getElementById("modal").addEventListener("click", function (event) {
  if (event.target === this) closeModal();
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") closeModal();
});

document.querySelectorAll(".side-nav a").forEach(function (link) {
  link.addEventListener("click", function () {
    document.querySelectorAll(".side-nav a").forEach(function (item) {
      item.classList.remove("active");
    });
    link.classList.add("active");
  });
});
