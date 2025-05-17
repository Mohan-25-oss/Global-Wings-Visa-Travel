    let slideIndex = 0;

    function showSlides() {
    const slides = document.getElementsByClassName("slide");

    // সব স্লাইড লুকানো
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // পরবর্তী স্লাইড দেখানো
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // প্রতি ৩ সেকেন্ডে পরিবর্তন
    }

    // শুরু করা
    showSlides();
