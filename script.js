function openModal() {
    var modal = document.getElementById("photoModal");
    var fullImage = document.getElementById("fullImage");
    var profilePic = document.querySelector(".profile-pic");

    fullImage.src = profilePic.src;
    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById("photoModal").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("loading").style.display = "none";
    }, 1500); // Loading akan hilang setelah 1.5 detik
});