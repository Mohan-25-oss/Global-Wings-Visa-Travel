    // Hamburger menu toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
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
function showVisaDetail(visaType) {
            // সব Visa ডিটেইল লুকিয়ে দিন
            document.querySelectorAll('.visa-detail').forEach(detail => {
                detail.classList.remove('active');
            });
            
            // সব লিস্ট আইটেম থেকে active ক্লাস রিমুভ করুন
            document.querySelectorAll('.visa-types li').forEach(item => {
                item.classList.remove('active');
            });
            
            // বর্তমান আইটেমে active ক্লাস যোগ করুন
            event.currentTarget.classList.add('active');
            
            // সংশ্লিষ্ট Visa ডিটেইল দেখান
            document.getElementById(visaType + '-visa').classList.add('active');
        }