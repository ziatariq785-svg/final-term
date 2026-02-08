// Open popup with dynamic data
document.querySelectorAll(".openPopup").forEach(button => {
  button.addEventListener("click", function() {

    document.getElementById("popupName").innerText = this.dataset.name;
    document.getElementById("popupPrice").innerText = this.dataset.price;
    document.getElementById("popupImg").src = this.dataset.img;
    document.getElementById("popupDesc").innerText = this.dataset.desc;

    document.getElementById("popup").style.display = "block";
  });
});

// Close popup
document.querySelector(".close-btn").onclick = function() {
  document.getElementById("popup").style.display = "none";
};

// Close when clicking outside
window.onclick = function(e) {
  if (e.target == document.getElementById("popup")) {
    document.getElementById("popup").style.display = "none";
  }
};

//   order-detail









