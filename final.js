// SCROLL FROM CONTAINER TO A CONTAINER
function scrollToContainer1() {
  document.getElementById('container1').scrollIntoView({ behavior: 'smooth' });
}
function scrollToContainer2() {
    document.getElementById('container2').scrollIntoView({ behavior: 'smooth' });
}
function scrollToContainer3() {
  document.getElementById('container3').scrollIntoView({ behavior: 'smooth' });
}
function scrollToContainer4() {
  document.getElementById('container4').scrollIntoView({ behavior: 'smooth' });
}
function scrollToContainer5() {
  document.getElementById('container5').scrollIntoView({ behavior: 'smooth' });
}
// CONTAINER 3 //
var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',  
    coverflowEffect: {
        rotate: -10,
        stretch: 0,
        depth: 100,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});


function showReservationForm1() {
    // Redirect to the reservation form page
    window.location.href = "reservation(1).html"; 
  }
  function showReservationForm2() {
    // Redirect to the reservation form page
    window.location.href = "reservation(2).html";
  }
  function showReservationForm3() {
    // Redirect to the reservation form page
    window.location.href = "reservation(3).html"; 
  }


  
  

// CONTAINER 4 //
function toggleDropdown(dropdownId) {
    const clickedDropdown = document.getElementById(dropdownId);
    const menuItem = clickedDropdown.parentElement; 

    if (clickedDropdown.style.display === 'block') {
        clickedDropdown.style.display = 'none'; 
        menuItem.classList.remove('active'); 
    } else {
        clickedDropdown.style.display = 'block'; 
        menuItem.classList.add('active'); 
    }
}


// Function to go back to the previous page
function goBack() {
    window.history.back();  
}
const contactForm = document.getElementById("contactForm");
const thankYouModal = document.getElementById("thankYouModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const emailInput = document.getElementById("emailInput");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    thankYouModal.style.display = "flex";
});

closeModalBtn.addEventListener("click", () => {
    thankYouModal.style.display = "none";
    emailInput.value = ""; // Clear email input field
});
const thankYouModal1 = document.getElementById("thankYouModal1");
const closeModalBtn1 = document.getElementById("closeModalBtn1");
const contactForm1 = document.getElementById("contactForm1");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const query = document.getElementById("query");
const submitButton = document.querySelector('button[type="submit1"]');

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    thankYouModal1.style.display = "flex";
});

closeModalBtn1.addEventListener("click", () => {
    thankYouModal1.style.display = "none";
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    phone.value = "";
    query.value = "";
});