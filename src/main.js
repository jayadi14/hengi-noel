// Load the layout HTML, which includes the header container
fetch('layout/layout.html')
  .then((response) => {
    console.log('Layout response status:', response.status); // Log the response status
    return response.text();
  })
  .then((data) => {
    document.getElementById('main-content-container').innerHTML = data;

    // Now that layout is loaded, we can load the header
    return fetch('layout/header.html');
  })
  .then((response) => {
    console.log('Header response status:', response.status); // Log the response status
    return response.text();
  })
  .then((data) => {
    document.getElementById('header-container').innerHTML = data;

    // Fetch navigation links from JSON
    return fetch('assets/json/navLinks.json');
  })
  .then((response) => {
    console.log('Navigation JSON response status:', response.status); // Log the response status
    return response.json();
  })
  .then((navLinks) => {
    const navContainer = document.getElementById('nav-links');

    // Loop through each link and create an element
    navLinks.forEach((link) => {
      const anchor = document.createElement('a');
      anchor.href = link.url;

      const div = document.createElement('div');
      div.className =
        'p-2 w-[120px] text-white border-8 border-black hover:border-b-yellow-400 duration-300';
      div.textContent = link.name;

      anchor.appendChild(div);
      navContainer.appendChild(anchor);
    });

    console.log('Navigation loaded successfully'); // Confirm successful loading
  })
  .catch((error) =>
    console.error('Error loading header or navigation:', error),
  );
