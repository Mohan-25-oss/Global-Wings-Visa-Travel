// Application start
// Function to show visa details for selected country
// Function to show visa details for selected country
function showVisaDetail(countryId) {
    // 1. Remove 'active' class from all country list items
    const countryItems = document.querySelectorAll('.country-list li');
    countryItems.forEach(item => {
        item.classList.remove('active');
    });
    
    // 2. Add 'active' class to clicked item
    event.target.classList.add('active');
    
    // 3. Hide all visa details
    const visaDetails = document.querySelectorAll('.visa-detail');
    visaDetails.forEach(detail => {
        detail.classList.remove('active');
        detail.style.display = 'none';
    });
    
    // 4. Show the selected visa detail with animation
    const selectedDetail = document.getElementById(countryId);
    if (selectedDetail) {
        selectedDetail.classList.add('active');
        selectedDetail.style.display = 'block';
        selectedDetail.style.animation = 'fadeIn 0.5s ease-in-out';
    }
}

// Initialize with first country showing
document.addEventListener('DOMContentLoaded', function() {
    // Set first country as active by default
    const firstCountry = document.querySelector('.country-list li');
    if (firstCountry) {
        firstCountry.classList.add('active');
    }
    
    // Show first visa detail by default
    const firstDetail = document.querySelector('.visa-detail');
    if (firstDetail) {
        firstDetail.classList.add('active');
        firstDetail.style.display = 'block';
    }
});
// Application end

// Function to show tour details
function showTourDetail(destinationId) {
    // Remove active class from all destination list items
    document.querySelectorAll('.destination-list li').forEach(item => {
        item.classList.remove('active');
    });
    
    // Add active class to clicked item
    event.target.classList.add('active');
    
    // Hide all destination details
    document.querySelectorAll('.destination-detail').forEach(detail => {
        detail.classList.remove('active');
    });
    
    // Show the selected destination detail
    const selectedDetail = document.getElementById(destinationId);
    if (selectedDetail) {
        selectedDetail.classList.add('active');
    }
}

// Initialize with first destination showing
document.addEventListener('DOMContentLoaded', function() {
    // Set first destination as active by default
    const firstDestination = document.querySelector('.destination-list li');
    if (firstDestination) {
        firstDestination.classList.add('active');
    }
    
    // Show first destination detail by default
    const firstDetail = document.querySelector('.destination-detail');
    if (firstDetail) {
        firstDetail.classList.add('active');
    }
});
// upcoming tours end

// explore section
// Animate explore section on scroll
// ডেস্টিনেশন ডিটেইলসে স্ক্রল করার ফাংশন
function scrollToDetails() {
    // শুধু মোবাইল ডিভাইসে কাজ করবে
    if (window.innerWidth <= 768) {
        const detailsSection = document.querySelector('.destination-details');
        if (detailsSection) {
            // স্মুথ স্ক্রলিং ইফেক্ট সহ
            detailsSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // সামান্য উপরে স্ক্রল (ঐচ্ছিক)
            window.scrollBy(0, -50);
        }
    }
}

// বিদ্যমান showTourDetail ফাংশন
// (Removed duplicate function definition)

document.addEventListener('DOMContentLoaded', function() {
    const exploreSection = document.querySelector('.explore-section');
    
    function animateOnScroll() {
        const sectionPosition = exploreSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if(sectionPosition < screenPosition) {
            exploreSection.style.opacity = '1';
            exploreSection.style.transform = 'translateY(0)';
        }
    }
    
    // Set initial state for animation
    if (exploreSection) {
        exploreSection.style.opacity = '0';
        exploreSection.style.transform = 'translateY(20px)';
        exploreSection.style.transition = 'all 0.8s ease';
        
        window.addEventListener('scroll', animateOnScroll);
        // Trigger once on load in case already in view
        animateOnScroll();
    }
});