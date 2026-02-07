const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    if (preloader) preloader.style.display = "none";
});

const menuContainer = document.getElementById("menucontainer");

function getAllProducts() {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
        .then(response => response.json())
        .then(data => renderProducts(data.meals))
        .catch(error => renderError(error));
}

function renderProducts(products) {
    if (!products) {
        menuContainer.innerHTML = "<p>No items found.</p>";
        return;
    }

    const html = products.map(meal => {
        return `
        <div class="menu-item">
            <img src="${meal.strMealThumb}" class="menu-img" alt="${meal.strMeal}">
            <h3 class="menu-name">${meal.strMeal}</h3>
            <p class="menu-price">Category: ${meal.strCategory}</p>
        </div>`;
    }).join("");

    menuContainer.innerHTML = html;
}

function renderError(error) {
    menuContainer.innerHTML = `
    <div style="
        background:#ffb3b3;
        padding:15px;
        text-align:center;
        border-radius:10px;
        color:#900;">
        ${error?.message || "Failed to load menu!"}
    </div>`;
}

getAllProducts();
