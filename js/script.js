let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar')
let navbar = document.querySelector('.navbar')
let videoBtn = document.querySelectorAll('.vid-btn')


window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}


menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});


searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});


formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});


formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});


videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
        

    })
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breeakpoints: {
        640: {
            slidesPerview:1,
        },
        768:{
            slidesPerview:2,
        },
        1024: {
            slidesPerview:3,
        },
    },
});

// var swiper = new Swiper(".brand-slider", {
//     spaceBetween: 20,
//     loop:true,
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//     },
//     breeakpoints: {
//         640: {
//             slidesPerview:1,
//         },
//         768:{
//             slidesPerview:2,
//         },
//         1024: {
//             slidesPerview:3,
//         },
//     },
// });
<script></script>
 // Initialize EmailJS with your user ID
 emailjs.init('syedaayesh3345@gmail.com');

 document.getElementById('contact-form').addEventListener('submit', function(event) {
   event.preventDefault(); // Prevent the default form submission

   // Collect form data
   const form = event.target;
   const formData = new FormData(form);

   // Convert FormData to an object
   const data = {};
   formData.forEach((value, key) => {
     data[key] = value;
   });

   // Send the email using EmailJS
   emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', data)
     .then((response) => {
       console.log('Email sent successfully:', response);
       alert('Your message has been sent successfully!');
       form.reset(); // Clear the form
     }, (error) => {
       console.error('Error sending email:', error);
       alert('There was an error sending your message. Please try again later.');
     });
 });
 </script>