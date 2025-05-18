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
  // সব ভিসা ডিটেইল হাইড করি
  const allDetails = document.querySelectorAll('.visa-detail');
  allDetails.forEach(detail => detail.classList.remove('active'));

  // সব মেনু থেকে active রিমুভ করি
  const allItems = document.querySelectorAll('.visa-types li');
  allItems.forEach(item => item.classList.remove('active'));

  // যেটা সিলেক্ট করা হয়েছে সেটায় active ক্লাস অ্যাড করি
  const selectedDetail = document.getElementById(country);
  if (selectedDetail) {
    selectedDetail.classList.add('active');
  }

  const selectedItem = Array.from(allItems).find(item =>
    item.textContent.toLowerCase().includes(country)
  );
  if (selectedItem) {
    selectedItem.classList.add('active');
  }
}

    