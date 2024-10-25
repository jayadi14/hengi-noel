// Load the header HTML
fetch("layout/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header-container").innerHTML = data;

    // Fetch navigation links from JSON
    return fetch("assets/json/navLinks.json");
  })
  .then((response) => response.json())
  .then((navLinks) => {
    const navContainer = document.getElementById("nav-links");

    // Loop through each link and create an element
    navLinks.forEach((link) => {
      const anchor = document.createElement("a");
      anchor.href = link.url;

      const div = document.createElement("div");
      div.className =
        "p-2 w-[120px] hover:text-white hover:bg-sky-400 duration-300";
      div.textContent = link.name;

      anchor.appendChild(div);
      navContainer.appendChild(anchor);
    });
  })
  .catch((error) =>
    console.error("Error loading header or navigation:", error)
  );
