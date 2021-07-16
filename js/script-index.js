//////// Navbar Section ///////// 
 const navToggle = document.querySelector(".nav-toggle"); 
 const links = document.querySelector(".links"); 
 
 
 navToggle.addEventListener("click", function () { 
   links.classList.toggle("show-links"); 
 }); 
 
 
 //////// Slider Section ///////// 
 const slides = document.querySelectorAll(".slide"); 
 const nextBtn = document.querySelector(".nextBtn"); 
 const prevBtn = document.querySelector(".prevBtn"); 
 slides.forEach(function (slide, index) { 
   slide.style.left = `${index * 100}%`; 
 }); 
 let counter = 0; 
 nextBtn.addEventListener("click", function () { 
   counter++; 
   carousel(); 
 }); 
 
 
 prevBtn.addEventListener("click", function () { 
   counter--; 
   carousel(); 
 }); 
 
 
 function carousel() { 
   if (counter < slides.length - 1) { 
     nextBtn.style.display = "block"; 
   } else { 
            nextBtn.style.display = "none"; 
   } 
   if (counter > 0) { 
     prevBtn.style.display = "block"; 
   } else { 
     prevBtn.style.display = "none"; 
   } 
   slides.forEach(function (slide) { 
     slide.style.transform = `translateX(-${counter * 100}%)`; 
   }); 
 } 
 
 
 prevBtn.style.display = "none"; 
 
 
 
 
 //////// Form Section ///////// 
 const form = document.getElementById('form'); 
 const username = document.getElementById('username'); 
 const email = document.getElementById('email'); 
 const password = document.getElementById('textarea'); 
 
 
 form.addEventListener('submit', e => { 
 	e.preventDefault(); 
 	checkInputs(); 
 }); 
 
 
 function checkInputs() { 
 	// trim to remove the whitespaces 
 	const usernameValue = username.value.trim(); 
 	const emailValue = email.value.trim(); 
 	const textareaValue = textarea.value.trim(); 
 	 
 	if(usernameValue === '') { 
 		setErrorFor(username, 'Username cannot be blank'); 
 	} else { 
		setSuccessFor(username); 
 	} 
 	 
 	if(emailValue === '') { 
 		setErrorFor(email, 'Email cannot be blank'); 
 	} else if (!isEmail(emailValue)) { 
 		setErrorFor(email, 'Not a valid email'); 
 	} else { 
 		setSuccessFor(email); 
 	} 
 	 
 	if(textareaValue === '') { 
 		setErrorFor(textarea, 'Password cannot be blank'); 
 	} else { 
 		setSuccessFor(textarea); 
 	} 
 } 
 
 
 function setErrorFor(input, message) { 
 	const formControl = input.parentElement; 
 	const small = formControl.querySelector('small'); 
 	formControl.className = 'form-control error'; 
 	small.innerText = message; 
 } 
 
 
 function setSuccessFor(input) { 
 	const formControl = input.parentElement; 
 	formControl.className = 'form-control success'; 
 } 
	 
 function isEmail(email) { 
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email); 
 } 
