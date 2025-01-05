// Smooth scroll functionality
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: 'smooth',
            });
        }
    });
});

// Image Modal
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");

// Open the modal when clicking on an activity image
document.querySelectorAll(".activity-img").forEach(img => {
    img.addEventListener("click", function () {
        modal.style.display = "block";
        modalImg.src = this.src; // Use the source of the clicked image
    });
});

// Close the modal when clicking on the close button
closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
});

// Close the modal when clicking anywhere outside the modal content
modal.addEventListener("click", function (e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
