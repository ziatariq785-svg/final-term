const hamburger = document.getElementById("hamburger");

const navLinks = document.getElementById("navLinks");
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


const form = document.getElementById("reservationForm");
const messageBox = document.getElementById("messageBox");

function generateReservationID() {
    return 'RES-' + Math.random().toString(36).substr(2, 9).toUpperCase();
}

function showMessage(text, isError = false) {
    messageBox.textContent = text;
    messageBox.className = "msg-box"; 
    if (isError) messageBox.classList.add("error");
    messageBox.classList.add("show");

    setTimeout(() => {
        messageBox.classList.remove("show");
    }, 60000);

    window.scrollTo({ top: 0, behavior: "smooth" });
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const reservationID = generateReservationID();

    const reservationData = {
        id: reservationID,
        name: document.getElementById("Name").value,
        email: document.getElementById("email").value,
        number: document.getElementById("number").value,
        time: document.getElementById("Time").value,
        date: document.getElementById("Date").value,
        party: document.getElementById("party").value,
        warning: "If you don't arrive on time, we will wait 30 minutes before canceling the reservation."
    };

    localStorage.setItem("reservation", JSON.stringify(reservationData));

    showMessage(
        `Reservation Confirmed! Your ID: ${reservationID}. ${reservationData.warning}`
    );

    form.reset(); 
});
