    // Hamburger menu toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
    });

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
  });
});


    // Navbar background change on scroll
    window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if(window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    });

// M-VISA SECTION 
function showVisaDetail(country) {
    const allVisaDetails = document.querySelectorAll(".visa-detail");
    const allVisaItems = document.querySelectorAll(".visa-types li");

    allVisaDetails.forEach((detail) => {
        detail.classList.remove("active");
    });

    allVisaItems.forEach((item) => {
        item.classList.remove("active");
    });

    document.getElementById(`${country}-visa`).classList.add("active");
    const clickedItem = Array.from(allVisaItems).find(item =>
        item.getAttribute("onclick").includes(country)
    );
    if (clickedItem) {
        clickedItem.classList.add("active");
    }
    }

