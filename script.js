// Get elements
const modal = document.querySelector(".modal");
const modalImg = document.getElementById("zoomedImg");
const closeBtn = document.querySelector(".close");
const downloadBtn = document.getElementById("downloadBtn");

// Open modal with clicked image
document.querySelectorAll(".carousel-item").forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    downloadBtn.href = img.src;
  });
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  modalImg.src = "";
  downloadBtn.href = "";
});

// Close modal on outside click
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    modalImg.src = "";
    downloadBtn.href = "";
  }
});
