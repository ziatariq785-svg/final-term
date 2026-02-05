// ======= Hamburger toggle =======
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

console.log("Script started: Hamburger & navLinks grabbed.");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  console.log("Hamburger clicked: nav-links toggled 'active' class.");
});

// ======= Preloader & menu container =======
const menuContainer = document.getElementById("menucontainer");
const preloader = document.getElementById("preloader");

// Step 1: Show preloader immediately
preloader.style.display = "block";
console.log("Preloader displayed.");

// ======= Function to load menu from API =======
async function loadMenu() {
  console.log("loadMenu() started: Fetching data from API...");

  try {
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
    console.log("API response received.");

    const data = await res.json();
    console.log("API JSON parsed.", data);

    const meals = data.meals || [];
    console.log(`Number of meals fetched: ${meals.length}`);

    // Step 3: Build HTML for menu
    const html = meals.map(meal => {
      const img = meal.strMealThumb;
      const name = meal.strMeal;
      const price = (Math.random() * (20 - 5) + 5).toFixed(2);

      console.log(`Building HTML for: ${name}`);

      return `
        <div class="menu-item">
          <img src="${img}" alt="${name}" class="menu-img">
          <h3 class="menu-name">${name}</h3>
          <p class="menu-price">$${price}</p>
        </div>
      `;
    }).join("");

    menuContainer.innerHTML = html;
    console.log("Menu HTML injected into DOM.");

  } catch (error) {
    console.error("Error loading menu:", error);
    menuContainer.innerHTML = "<p>Failed to load menu.</p>";
  } finally {
    // Step 4: Hide preloader after everything
    preloader.style.display = "none";
    console.log("Preloader hidden. Menu page ready.");
  }
}

// Step 5: Call the function
loadMenu();
console.log("loadMenu() called.");
